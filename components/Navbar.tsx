import Image from "next/image";
import Switcher from "./Switcher";
import { useState, useCallback } from "react";
import NavbarMenu from "./NavbarMenu";
import { useTheme } from "@/hooks/ThemeContext";

export default function Navbar () {
    
    const [ showNavbarMenu , setShowNavbarMenu ] = useState(false);
    const { darkTheme, toggleDarkTheme } = useTheme();
    
    const toggleNavbarMenu = useCallback(() => {
        setShowNavbarMenu((current) => !current)
    }, []);

    return (
        <nav className=
        {`${darkTheme ? 'bg-zinc-800' : 'bg-red-600'} 
        flex 
        fixed
        z-50
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
                <button className="text-white rounded-3xl w-[40px] bg-sky-500 h-[40px] flex items-center justify-center hover:saturate-150 hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="25" height="25" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                    </svg>
                </button>
                <input className="w-[140px] md:w-[200px] rounded-3xl h-[40px] px-3" type="text" placeholder="Search your pokemon ..."/>
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

