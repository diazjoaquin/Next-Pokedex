import React from "react";
import NavbarItem from "./NavbarItem";

interface NavbarMenuProps {
    visible?: boolean;
    dark: boolean;
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({
    visible,
    dark
}) => {

    if (!visible) {
         return null;
    }

    return (
        <div className={`${dark ? 'bg-zinc-800 ' : 'bg-red-600'} absolute shadow-md shadow-zinc-600 rounded-xl flex flex-col justify-center top-[75%] right-[11%] gap-4 ml-4 px-8 py-4`}>
            <NavbarItem label="Home"/>
            <NavbarItem label="Create"/>
            <NavbarItem label="My Account"/>
            <NavbarItem label="About"/>
        </div>
    )
};

export default NavbarMenu;