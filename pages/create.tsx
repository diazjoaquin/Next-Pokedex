import Navbar from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { useTheme } from "@/hooks/ThemeContext";
import { createPokemon, getCurrentUser, getTypes } from "@/redux/actions";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { AppState } from "@/redux/reducer";
import { ChangeEvent, useEffect, useState } from "react";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const validation = (form: any) => {
  const error = {
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    image: "",
    types: "",
  };

  // name validations:

  form.name && /[/\/*+$#!%&()=?¿\]{}[\-@_,.:<>0-9]/.test(form.name)
    ? (error.name = "Signs and numbers are now allowed")
    : "";
  form.name === "" ? (error.name = "Name is required") : "";
  form.name && form.name.length > 0 && form.name.length < 3
    ? (error.name = "Name must have at least 3 characters")
    : "";

  // hp validations:

  !form.hp ? (error.hp = "Enter a valid number between 1 and 400.") : "";
  Number(form.hp) < 0 || Number(form.hp) > 400
    ? (error.hp = "Enter a valid number between 1 and 400.")
    : "";

  // attack validations:

  !form.attack
    ? (error.attack = "Enter a valid number between 1 and 350.")
    : "";
  Number(form.attack) < 0 || Number(form.attack) > 350
    ? (error.attack = "Enter a valid number between 1 and 350.")
    : "";

  //defense validations:

  !form.defense
    ? (error.defense = "Enter a valid number between 1 and 400.")
    : "";
  Number(form.defense) < 0 || Number(form.defense) > 400
    ? (error.defense = "Enter a valid number between 1 and 400.")
    : "";

  // speed validations:

  !form.speed ? (error.speed = "Enter a valid number between 1 and 100.") : "";
  Number(form.speed) < 0 || Number(form.speed) > 100
    ? (error.speed = "Enter a valid number between 1 and 100.")
    : "";

  // height validations:

  !form.height
    ? (error.height = "Enter a valid number between 1 and 150.")
    : "";
  Number(form.height) < 0 || Number(form.height) > 150
    ? (error.height = "Enter a valid number between 1 and 150.")
    : "";

  // weight validations:

  !form.weight
    ? (error.weight = "Enter a valid number between 1 and 300.")
    : "";
  Number(form.weight) < 0 || Number(form.weight) > 300
    ? (error.weight = "Enter a valid number between 1 and 300.")
    : "";

  // image validations:

  form.image !== "" && !/\.(jpg|jpeg|png|gif)$/i.test(form.image)
    ? (error.image = "Please enter a valid URL")
    : "";

  return error;
};

const Create = () => {
  const { darkTheme } = useTheme();
  const data = useAppSelector((state?: AppState) => state?.types);
  const user = useAppSelector((state?: AppState) => state?.currentUser);

  const router = useRouter();

  const dispatch = useAppDispatch();
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [form, setForm] = useState({
    name: "",
    hp: undefined,
    attack: undefined,
    defense: undefined,
    speed: undefined,
    height: undefined,
    weight: undefined,
    image: "",
    types: [...selectedTypes],
    custom: true,
    createdBy: user?.name,
  });

  const [error, setError] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    image: "",
    types: "",
  });

  useEffect(() => {
    dispatch(getTypes());
    dispatch(getCurrentUser());
  }, [dispatch]);

  const handleSelectType = (event: ChangeEvent<HTMLSelectElement>) => {
    const data: string = event.target.value;
    if (!selectedTypes.includes(data) && selectedTypes.length < 2) {
      setSelectedTypes([...selectedTypes, data]);

      setForm((prevForm) => ({
        ...prevForm,
        types: [...selectedTypes, data],
      }));
    }
  };

  const handleRemoveType = (typeToRemove: string) => {
    const updateSelectedTypes = selectedTypes.filter(
      (type) => type !== typeToRemove
    );
    setSelectedTypes(updateSelectedTypes);

    setForm((prevForm) => ({
      ...prevForm,
      types: updateSelectedTypes,
    }));
  };

  const handleChange = (event: any) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

    setError(
      validation({
        ...form,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = () => {
    setError(validation(form));

    if (Object.values(error).some((error) => error !== "")) {
      return alert("Make shure to complete all the fields");
    }

    dispatch(createPokemon(form));
    alert("Pokemon created succesfully");
    router.push("/");
  };

  return (
    <main className="w-full h-full flex items-center justify-center">
      <Navbar />
      <Sidebar />
      <section
        className={`${darkTheme ? "bg-zinc-700" : "bg-red-600"} 
            md:w-7/12
            w-10/12
            md:h-[70%]
            h-4/5
            absolute 
            md:bottom-20
            bottom-14
            flex
            flex-col
            gap-2
            md:px-12
            px-4
            md:justify-evenly
            justify-center
            items-center
            rounded-2xl
            shadow-zinc-600
            shadow-md`}
      >
        <div className="pt-2">
          <h1 className="text-white text-2xl font-bold capitalize mt-4 mb-3">
            Create your own pokemon
          </h1>
        </div>
        <form className="lg:w-9/12 w-11/12 h-3/4 grid grid-cols-2 gap-10">
          <div className="flex flex-col w-full gap-2">
            <section className="flex flex-col md:gap-1 justify-between">
              <label className="text-white text-sm after:content-['*'] after:ml-0.5">
                Name
              </label>
              <input
                className="rounded-md px-2"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              <div className="h-[20px]">
                {error.name && (
                  <span className="text-xs text-white font-bold h-[20px]">
                    {error.name}
                  </span>
                )}
              </div>
            </section>
            <section className="flex flex-col md:gap-1 justify-between">
              <label className="text-white text-sm after:content-['*'] after:ml-0.5">
                HP
              </label>
              <input
                className="rounded-md px-2"
                type="number"
                min={1}
                max={400}
                name="hp"
                value={form.hp}
                onChange={handleChange}
              />
              <div className="h-[20px]">
                {error.hp && (
                  <span className="text-xs text-white font-bold">
                    {error.hp}
                  </span>
                )}
              </div>
            </section>
            <section className="flex flex-col md:gap-1 justify-between">
              <label className="text-white text-sm after:content-['*'] after:ml-0.5">
                Attack
              </label>
              <input
                className="rounded-md px-2"
                type="number"
                min={1}
                max={350}
                name="attack"
                value={form.attack}
                onChange={handleChange}
              />
              <div className="h-[20px]">
                {error.attack && (
                  <span className="text-xs text-white font-bold">
                    {error.attack}
                  </span>
                )}
              </div>
            </section>
            <section className="flex flex-col md:gap-1 justify-between">
              <label className="text-white text-sm after:content-['*'] after:ml-0.5">
                Defense
              </label>
              <input
                className="rounded-md px-2"
                type="number"
                min={1}
                max={400}
                name="defense"
                value={form.defense}
                onChange={handleChange}
              />
              <div className="h-[20px]">
                {error.defense && (
                  <span className="text-xs text-white font-bold">
                    {error.defense}
                  </span>
                )}
              </div>
            </section>
            <section className="flex flex-col md:gap-1 justify-between">
              <label className="text-white text-sm after:content-['*'] after:ml-0.5">
                Speed
              </label>
              <input
                className="rounded-md px-2"
                type="number"
                min={1}
                max={100}
                name="speed"
                value={form.speed}
                onChange={handleChange}
              />
              <div className="h-[20px]">
                {error.speed && (
                  <span className="text-xs text-white font-bold">
                    {error.speed}
                  </span>
                )}
              </div>
            </section>
          </div>

          <div className="flex flex-col w-full gap-2">
            <section className="flex flex-col md:gap-1 justify-between">
              <label className="text-white text-sm after:content-['*'] after:ml-0.5">
                Height
              </label>
              <input
                className="rounded-md px-2"
                type="number"
                min={1}
                max={150}
                name="height"
                value={form.height}
                onChange={handleChange}
              />
              <div className="h-[20px]">
                {error.height && (
                  <span className="text-xs text-white font-bold">
                    {error.height}
                  </span>
                )}
              </div>
            </section>

            <section className="flex flex-col md:gap-1 justify-between">
              <label className="text-white text-sm after:content-['*'] after:ml-0.5">
                Weight
              </label>
              <input
                className="rounded-md px-2"
                type="number"
                min={1}
                max={300}
                name="weight"
                value={form.weight}
                onChange={handleChange}
              />
              <div className="h-[20px]">
                {error.weight && (
                  <span className="text-xs text-white font-bold">
                    {error.weight}
                  </span>
                )}
              </div>
            </section>
            <section className="flex flex-col md:gap-1 justify-between">
              <label className="text-white text-sm">Image (URL)</label>
              <input
                className="rounded-md px-2"
                type="url"
                name="image"
                value={form.image}
                onChange={handleChange}
              />
              <div className="h-[20px]">
                {error.image && (
                  <span className="text-xs text-white font-bold">
                    {error.image}
                  </span>
                )}
              </div>
            </section>
            <section className="flex flex-col md:gap-1 justify-between">
              <label className="text-white text-sm">Types</label>
              <select
                className="rounded-md px-2"
                onChange={(event) => handleSelectType(event)}
                name="type"
              >
                {data?.map((type: any, index) => {
                  return (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  );
                })}
              </select>
            </section>
            <div className="h-[40px]">
              {selectedTypes.length > 0 && selectedTypes.length <= 2 && (
                <div className="flex justify-end gap-1">
                  {selectedTypes.map((type, index) => (
                    <span
                      className={`${type} text-white font-bold flex gap-1 rounded-3xl py-1 px-3 border-2`}
                      key={index}
                    >
                      {type}
                      <span
                        className="relative left-1 pb-1 px-1 cursor-pointer"
                        onClick={() => handleRemoveType(type)}
                      >
                        x
                      </span>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </form>
        <button
          className="text-white rounded-md bg-sky-500 mb-4 py-2 w-4/12 hover:brightness-110"
          onClick={() => handleSubmit()}
        >
          Create pokemon
        </button>
      </section>
    </main>
  );
};

export default Create;
