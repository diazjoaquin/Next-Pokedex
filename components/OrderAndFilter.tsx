import { useTheme } from "@/hooks/ThemeContext";
import { filterByType, getTypes, orderByAttack, orderByDefense, orderByName } from "@/redux/actions";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { AppState } from "@/redux/reducer";
import { ChangeEvent, useEffect, useState } from "react";


const Filter = () => {

    const { darkTheme } = useTheme();
    const data = useAppSelector((state?: AppState) => state?.types);
    const [ selectedOptions, setSelectedOptions ] = useState<String[]>([]);
    const [ order, setOrder ] = useState('');

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTypes());
        dispatch(filterByType(selectedOptions));
    }, [selectedOptions, dispatch]);

    const handleFilterByType = (event: ChangeEvent<HTMLSelectElement>) => {
        const data: string = event.target.value;
        if (selectedOptions.length >= 2) return alert ('You cannot filter by more than two types');
        if (!selectedOptions.includes(data) && selectedOptions.length < 2) {
            setSelectedOptions([...selectedOptions, data]);
        };
        
    }

    const handleOrderByName = (event: ChangeEvent<HTMLSelectElement>) => {
        console.log(order);
        dispatch(orderByName(event.target.value));
        
        setOrder(event.target.value);
    }

    const handleOrderByAttack = (event: ChangeEvent<HTMLSelectElement>) => {
        dispatch(orderByAttack(event.target.value));
        setOrder(event.target.value);

    }

    const handleOrderByDefense = (event: ChangeEvent<HTMLSelectElement>) => {
        dispatch(orderByDefense(event.target.value));
        setOrder(event.target.value);
    }
    
    const handleDeleteFilter = (typeToRemove: String) => {
        
        const updateOptions = selectedOptions.filter(type => type !== typeToRemove);
        setSelectedOptions(updateOptions);
    }

    return (
        <aside className="fixed flex items-center justify-center left-10 w-10 h-screen hover:w-[25%] group">
            <div className="block group-hover:rotate-180 transition duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-arrow-right" width="52" height="52" viewBox="0 0 24 24" strokeWidth="1.5" stroke={`${darkTheme ? '#18181b' : '#dc2626'}`} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
                    <path d="M16 12l-4 -4" />
                    <path d="M16 12h-8" />
                    <path d="M12 16l4 -4" />
                </svg>
            </div>
            <div className={`${darkTheme ? 'bg-zinc-800' : 'bg-red-700'} rounded-lg shadow-md shadow-zinc-900 h-[60%] w-[90%] hidden group-hover:block`}>
                <div className="flex flex-col gap-2 py-2 px-4">
                    <h3 className="text-white text-lg font-bold">Order by:</h3>

                    <select name="Name" id="Name" onChange={(event) => handleOrderByName(event)} className="rounded-md py-1">
                        <option value="Name">Name</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>

                    </select>
                    <select name="Defense" id="Defense" onChange={(event) => handleOrderByDefense(event)} className="rounded-md py-1">
                        <option value="Defense">Defense</option>
                        <option value="Min-Max">Min-Max</option>
                        <option value="Max-Min">Max-Min</option>

                    </select>
                    <select name="Attack" id="Attack" onChange={(event) => handleOrderByAttack(event)} className="rounded-md py-1">
                        <option value="Attack">Attack</option>
                        <option value="Min-Max">Min-Max</option>
                        <option value="Max-Min">Max-Min</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2 py-2 px-4">
                    <h3 className="text-white text-lg font-bold">Filter by Types</h3>
                    <select name="" id="Types" onChange={(event) => handleFilterByType(event)} className="rounded-md py-1">
                        <option></option>
                        {
                        data?.map((type: any) => {
                            return <option key={type}>
                                {type}
                            </option>
                        })
                        }
                    </select>
                </div>
                <div className="flex flex-row gap-2 py-2 px-4">
                    {
                        selectedOptions.length > 0 && selectedOptions.length <= 2 && selectedOptions.map((type, index) => {
                        return <span className={`${type} text-white font-bold flex gap-1 rounded-3xl py-2 px-4 border-2`} key={index}>
                            {type}
                            <span className="relative font-normal left-1 pb-1 px-1 cursor-pointer" onClick={() => handleDeleteFilter(type)}>x</span>
                        </span>})
                    }
                         
                </div>
            </div>
        </aside>
    )
};

export default Filter;