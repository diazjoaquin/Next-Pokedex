import Navbar from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { useTheme } from "@/hooks/ThemeContext";
import { getTypes } from "@/redux/actions";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { AppState } from "@/redux/reducer";
import { ChangeEvent, useEffect, useState } from "react";

const Create = () => {

    const { darkTheme } = useTheme(); 
    const data = useAppSelector((state?: AppState) => state?.types);
    const dispatch = useAppDispatch();
    const [ selectedTypes, setSelectedTypes ] = useState<string[]>([]);

    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch]);

    const handleSelectType = (event: ChangeEvent<HTMLSelectElement>) => {
        const data: string = event.target.value;
        if (!selectedTypes.includes(data) && selectedTypes.length < 2) {
            setSelectedTypes([...selectedTypes, data])
        };
    };
    
    const handleRemoveType = (typeToRemove: string) => {
        const updateSelectedTypes = selectedTypes.filter(type => type !== typeToRemove);
        setSelectedTypes(updateSelectedTypes);
    }

    return (
        <main className="w-full h-full flex items-center justify-center">
            <Navbar/>
            <Sidebar/>
            <section className={`${darkTheme ? 'bg-zinc-700' : 'bg-red-600'} 
            w-[45%] 
            h-[70%]
            absolute 
            bottom-20
            flex
            flex-col
            gap-2
            px-12
            justify-evenly
            items-center
            rounded-2xl
            shadow-zinc-600
            shadow-md`}>
                <div className="pt-4 flex px-24">
                    <h1 className="text-white text-xl font-bold uppercase">Create your own pokemon</h1>
                </div>
                <form className="flex px-24 gap-12 mb-6" action=""> 
                    <div className="flex flex-col gap-2">
                        <label className="text-white" htmlFor="">Name:</label>
                        <input className="rounded-md px-2" type="text" />

                        <label className="text-white" htmlFor="">HP:</label>
                        <input className="rounded-md px-2" type="number" />

                        <label className="text-white" htmlFor="">Attack:</label>
                        <input className="rounded-md px-2" type="number" />

                        <label className="text-white" htmlFor="">Defense:</label>
                        <input className="rounded-md px-2" type="number" />

                        <label className="text-white" htmlFor="">Speed:</label>
                        <input className="rounded-md px-2" type="number" />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <label className="text-white" htmlFor="">Height:</label>
                        <input className="rounded-md px-2" type="number" />

                        <label className="text-white" htmlFor="">Weight:</label>
                        <input className="rounded-md px-2" type="number" />

                        <label className="text-white" htmlFor="">Image:</label>
                        <input className="rounded-md px-2" type="text" />

                        <label className="text-white" htmlFor="">Types:</label>
                        <select className="rounded-md px-2" onChange={(event) => handleSelectType(event)} name="type" id="">
                            {data?.map((type: any) => {
                                return <option value={type}>{type}</option>
                            })};
                        </select>
                        {
                            selectedTypes.length > 0 && selectedTypes.length <= 2 && 
                            <div className="flex gap-1">
                                {selectedTypes.map((type, index) => (
                                    <span className={`${type} text-white font-bold flex gap-1 rounded-3xl py-1 px-3 border-2`} key={index}>
                                        {type}
                                        <span className="relative left-1 pb-1 px-1 cursor-pointer" onClick={() => handleRemoveType(type)}>x</span>
                                    </span>
                                ))};
                          </div>
                        }
                        <button className="text-white rounded-md bg-sky-500 mt-6 py-2 hover:brightness-110">Create pokemon</button>
                    </div>

                </form>
            </section>
        </main>

        )
};

export default Create;