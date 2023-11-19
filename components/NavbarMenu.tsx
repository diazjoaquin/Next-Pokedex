import React from "react";
import NavbarItem from "./NavbarItem";

interface NavbarMenuProps {
    visible?: boolean;
    dark?: boolean;
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({
    visible,
    dark
}) => {

    if (!visible) {
         return null;
    }

    return (
        <div className={`${dark ? 'bg-zinc-800 ' : 'bg-red-600'} absolute shadow-md shadow-zinc-600 rounded-xl flex flex-col justify-center top-[75%] right-[11%] gap-4 pl-2 pr-8 py-4`}>
            <NavbarItem dark={dark} label="Home"/>
            <NavbarItem dark={dark} label="Create"/>
            <NavbarItem dark={dark} label="My Account"/>
            <NavbarItem dark={dark} label="About"/>
        </div>
    )
};

export default NavbarMenu;