import useTypes from '@/hooks/useTypes';

const Filter = () => {

    const { data } = useTypes();
    

    return (
        <aside className="fixed flex items-center justify-center left-10 w-10 h-screen hover:w-[25%] group">
            <div className="block group-hover:rotate-180 transition duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-arrow-right" width="52" height="52" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2825" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
                    <path d="M16 12l-4 -4" />
                    <path d="M16 12h-8" />
                    <path d="M12 16l4 -4" />
                </svg>
            </div>
            <div className="bg-red-700 rounded-lg shadow-md shadow-zinc-600 h-[60%] w-[90%] hidden group-hover:block">
                <div className="flex flex-col gap-2 py-2 px-4">
                    <h3 className="text-white text-lg font-bold">Order by:</h3>

                    <select name="Name" id="Name" className="rounded-md py-1">
                        <option value="Name">Name</option>
                        <option value="">A-Z</option>
                        <option value="">Z-A</option>

                    </select>
                    <select name="Defense" id="Defense" className="rounded-md py-1">
                        <option value="Defense">Defense</option>
                        <option value="">Min-Max</option>
                        <option value="">Max-Min</option>

                    </select>
                    <select name="Attack" id="Attack" className="rounded-md py-1">
                    <option value="Attack">Attack</option>
                        <option value="">Min-Max</option>
                        <option value="">Max-Min</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2 py-2 px-4">
                    <h3 className="text-white text-lg font-bold">Filter by Types</h3>
                    <select name="" id="Types" className="rounded-md py-1">
                        {
                        data?.map((type : string) => {
                            return <option key={type}>
                                {type}
                            </option>
                        })
                        }
                    </select>
                </div>
                <div className='px-4 py-2 flex justify-center w-full'>
                    <button className='w-full text-md px-2 py-2 rounded-xl bg-sky-500 font-bold text-white uppercase hover:brightness-110'>Apply</button>
                </div>
            </div>
        </aside>
    )
};

export default Filter;