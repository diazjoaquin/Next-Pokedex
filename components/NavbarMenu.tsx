import React from "react";
import NavbarItem from "./NavbarItem";
import { useRouter } from "next/router";

interface NavbarMenuProps {
    visible?: boolean;
    dark?: boolean;
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({
    visible,
    dark
}) => {

    const router = useRouter();

    if (!visible) {
         return null;
    }

    return (
        <div className={`${dark ? 'bg-zinc-800 ' : 'bg-red-600'} absolute shadow-md shadow-zinc-600 rounded-xl flex flex-col justify-center top-[75%] right-[11%] gap-4 pl-2 pr-8 py-4`}>
            <span onClick={() => {router.push('/')}}><NavbarItem dark={dark} label="Home"/></span>
            <span onClick={() => {router.push('/create')}}><NavbarItem dark={dark} label="Create"/></span>
            {/* <NavbarItem dark={dark} label="My Account"/> */}
            <span onClick={() => {router.push('/about')}}><NavbarItem dark={dark} label="About"/></span>
        </div>
    )
};

export default NavbarMenu;