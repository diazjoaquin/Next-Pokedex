import React from 'react';
import Image from 'next/image';

interface NavbarItemProps {
    label?: string;
    dark?: boolean
}

const NavbarItem: React.FC<NavbarItemProps> = ({
    label,
    dark,
}) => {
    return (
        <div className="text-gray-100 cursor-pointer hover:text-white hover:underline underline-offset-2 transition flex gap-2">
            <Image
            width={30}
            height={5}
            src={`${dark ? '/images/ultraball.png' : '/images/pokeball.png'}`}
            alt='pokeball'/>
            {label}
        </div>
    )
};

export default NavbarItem;