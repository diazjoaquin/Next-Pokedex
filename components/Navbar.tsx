import Image from "next/image";
import Switcher from "./Switcher";
import { useState, useCallback } from "react";
import NavbarMenu from "./NavbarMenu";

export default function Navbar () {
    
    const [ showNavbarMenu , setShowNavbarMenu ] = useState(false);
    const [ darkTheme, setDarkTheme ] = useState(false);

    const toggleDarkTheme = useCallback(() => {
        setDarkTheme((current) => !current)
    }, [darkTheme])
    
    const toggleNavbarMenu = useCallback(() => {
        setShowNavbarMenu((current) => !current)
    }, []);

    return (
        <nav className=
        {`${darkTheme ? 'bg-zinc-900/80' : 'bg-red-600/80'} 
        flex 
        fixed 
        top-3 
        items-center 
        justify-around 
        w-full 
        md:w-[90%] 
        h-[10%] 
        md:h-[15%] 
        md:mx-[5%] 
        rounded-full 
        shadow-md
        shadow-zinc-700`}>
            <header className="w-[150px] hidden md:flex">
                <Image 
                width={150}
                height={30} 
                src="/images/header.png" alt=""/>
            </header>
            <div className="flex gap-1">
                <button className="text-white rounded-md w-[100px] bg-sky-500 h-[35px]">Search</button>
                <input className="w-[200px] rounded-md h-[35px] px-2" type="text" placeholder="Search your pokemon ..."/>
            </div>
            <div className="w-30 flex gap-2">
                <button onClick={toggleNavbarMenu} className="border-2 rounded-full p-2">
                    <Image
                    width={20}
                    height={20} 
                    src="/images/arrow.png" alt="" 
                    className=
                    {`${showNavbarMenu ? 'rotate-180'  : 'rotate-0'}
                    transition
                    duration-300`}/>
                </button>
                <NavbarMenu dark={darkTheme} visible={showNavbarMenu}/>
                <div className="flex items-center justify-center">
                    <Switcher dark={darkTheme} toggleDarkTheme={() => toggleDarkTheme()}/>
                </div>
            </div>
        </nav>
    )
};

