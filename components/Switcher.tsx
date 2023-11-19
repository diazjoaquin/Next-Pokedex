import React from "react";
import Image from "next/image";


interface SwitcherProps {
    dark?: boolean;
    toggleDarkTheme: any
}

const Switcher: React.FC<SwitcherProps> = ({
    dark,
    toggleDarkTheme
}) => {

    return (
        <button
        onClick={toggleDarkTheme} 
        className=
        {`${dark ? 'bg-zinc-900/80' : 'bg-yellow-500/80'}
        ${dark ? 'after:right-0' : 'after:left-0'}
        rounded-full
        relative
        cursor-pointer
        flex
        outline-none
        shadow-md
        px-[2px]
        shadow-zinc-700
        after:block
        after:w-[36px]
        after:h-[36px]
        after:absolute
        after:bg-zinc-100
        after:top-0
        after:inset-y-0
        after:rounded-full
        after:shadow-sm
        after:shadow-zinc-700
        `}>
            <span>
                <Image 
                width={35} 
                height={35} 
                src="/images/sun.png" 
                className="block leading-8"
                alt="sun"/>
            </span>
            <span>
                <Image 
                width={35} 
                height={35} 
                src="/images/moon.png" 
                className="block leading-8"
                alt="moon"/>
            </span>
        </button>
    );
};

export default Switcher;