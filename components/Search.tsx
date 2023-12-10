export default function Search () {

    


    return (
        <div className="flex gap-1">
            <button className="text-white rounded-3xl w-[40px] bg-sky-500 h-[40px] flex items-center justify-center hover:saturate-150 hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="25" height="25" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                    <path d="M21 21l-6 -6" />
                </svg>
            </button>
            <input className="w-[140px] md:w-[200px] rounded-3xl h-[40px] px-3" type="text" placeholder="Search your pokemon ..."/>
        </div>
    )
};