import { getPokemonByName } from "@/redux/actions";
import { useAppDispatch } from "@/redux/hooks";
import { useState, useEffect } from "react";

export default function Search() {
  const dispatch = useAppDispatch();
  const [input, setInput] = useState("");

  useEffect(() => {
    dispatch(getPokemonByName(input));
  }, [dispatch, input]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInput(value);
  };

  return (
    <div className="flex gap-1">
      <input
        className="w-[140px] md:w-[200px] rounded-3xl h-[40px] px-3"
        value={input}
        type="text"
        onChange={(event) => handleChange(event)}
        placeholder="Search your pokemon ..."
      />
    </div>
  );
}
