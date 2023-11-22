import React from "react";
import Image from "next/image";

interface CardProps {
    id: string
    name: string
    hp: number
    attack: number
    defense: number
    imgUrl?: string
    types?: string[]
}

const Card: React.FC<CardProps> = ({
    id,
    name,
    hp,
    attack,
    defense,
    imgUrl,
    types,
}) => {


    return (
        <div className="flex flex-col rounded-xl items-center justify-between bg-red-600/80 shadow-md shadow-zinc-700 hover:scale-110 px-2">
            <div id={id} className=" text-white gap-2 font-bold flex w-100 mt-6">
                <h1>{name}</h1>
            </div>
            <div className="pt-2 pb-6">
                <img src={imgUrl} className="" alt="pokemon" />
            </div>
            <div className="text-white w-full font-bold text-sm flex items-center justify-center px-4 gap-3 lg:gap-2">
                <span className="flex gap-1 rounded-full border-2 py-2 px-1">
                    {hp}
                    <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="20" viewBox="0 0 24 24" strokeWidth="3" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    </svg>
                </span>
                <span className="flex gap-1 rounded-full border-2 py-2 px-1">
                    {attack}
                    <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="20" viewBox="0 0 24 24" strokeWidth="3" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M20 4v5l-9 7l-4 4l-3 -3l4 -4l7 -9z" />
                        <path d="M6.5 11.5l6 6" />
                    </svg>
                </span>
                <span className="flex gap-1 rounded-full border-2 py-2 px-1">
                    {defense}
                    <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="20" viewBox="0 0 24 24" strokeWidth="3" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M13.342 20.566c-.436 .17 -.884 .315 -1.342 .434a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 .117 6.34" />
                        <path d="M19 16l-2 3h4l-2 3" />
                    </svg>
                </span>
            </div>
            <div className="mb-8 flex justify-evenly gap-2 w-full mt-5 px-6 bottom-0">
                {types?.map((type:any) => {
                    return (
                        <span key={type} className={`${type} sm:w-[20%] md:w-[40%] lg:w-[40%] max-w-[65px] rounded-full p-4`}><img src={`/images/types/${type}.svg`} alt="type"/></span>
                    )
                })}
            </div>
        </div>
    )
};

export default Card;