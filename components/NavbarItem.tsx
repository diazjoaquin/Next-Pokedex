import React from 'react';
import Image from 'next/image';

interface NavbarItemProps {
    label: string
}

const NavbarItem: React.FC<NavbarItemProps> = ({
    label
}) => {
    return (
        <div className="text-gray-100 cursor-pointer hover:text-white hover:underline underline-offset-2 transition flex gap-2">
            <Image
            width={30}
            height={5}
            src='/images/pokeball.png'
            alt='pokeball'/>
            {label}
        </div>
    )
};

export default NavbarItem;