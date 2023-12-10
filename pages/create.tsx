import Navbar from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import useTypes from "@/hooks/useTypes"; 
import { useTheme } from "@/hooks/ThemeContext";

const Create = () => {

    const { data } = useTypes();
    const { darkTheme } = useTheme(); 
    

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
                        <select className="rounded-md px-2" name="type" id="">
                            {data?.map((type: string) => {
                                return <option value={type}>{type}</option>
                            })}
                        </select>
                        <button className="text-white rounded-md bg-sky-500 mt-6 py-2 hover:brightness-110">Create pokemon</button>
                    </div>

                </form>
            </section>
        </main>

        )
};

export default Create;