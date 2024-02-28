import React from 'react';
import { 
    MdKeyboardArrowRight, 
    MdKeyboardArrowLeft, 
    MdKeyboardDoubleArrowLeft, 
    MdKeyboardDoubleArrowRight } 
from "react-icons/md";
import { useTheme } from "@/hooks/ThemeContext";


interface PaginationProps {
    currentPage: number;
    numOfPages: number;
    handleNext: () => void;
    handlePrevious: () => void;
    handleToEnd: () => void;
    handleToBeginning: () => void;
}


export const Pagination: React.FC<PaginationProps> = ({
    currentPage, 
    numOfPages,
    handleNext, 
    handlePrevious, 
    handleToBeginning, 
    handleToEnd}) => {

    const { darkTheme } = useTheme(); 

    return (
        <div className="absolute top-[125px] md:top-[160px]">
            <div className="">
                {
                    <div className="flex gap-2 text-white">
                        <button className={`${darkTheme ? 'bg-zinc-700 hover:zinc-800' : 'bg-red-500 hover:bg-red-600'} 
                        border-2 rounded-full bg-red-500 px-2 hover:scale-110 
                        ${ currentPage === 1 ? 'pointer-events-none' : '' }`} 
                        onClick={() => handleToBeginning()}><MdKeyboardDoubleArrowLeft /></button>
                        <button className={`${darkTheme ? 'bg-zinc-700 hover:zinc-800' : 'bg-red-500 hover:bg-red-600'} 
                        border-2 rounded-full px-2 hover:scale-110 
                        ${ currentPage === 1 ? 'pointer-events-none' : '' }`} onClick={() => handlePrevious()}><MdKeyboardArrowLeft /></button>
                        <button className={`${darkTheme ? 'bg-zinc-700 hover:zinc-800' : 'bg-red-500 hover:bg-red-600'} 
                        rounded-full font-bold text-white px-3 py-1`}>{currentPage}</button>
                        <button className={`${darkTheme ? 'bg-zinc-700 hover:zinc-800' : 'bg-red-500 hover:bg-red-600'} 
                        border-2 rounded-full px-2 hover:scale-110 
                        ${ currentPage === (Math.ceil(numOfPages)) ? 'pointer-events-none' : '' }`} 
                        onClick={() => handleNext()}><MdKeyboardArrowRight /></button>
                        <button className={`${darkTheme ? 'bg-zinc-700 hover:zinc-800' : 'bg-red-500 hover:bg-red-600'} 
                        border-2 rounded-full px-2 hover:scale-110 
                        ${ currentPage === (Math.ceil(numOfPages)) ? 'pointer-events-none' : '' }`} 
                        onClick={() => handleToEnd()}><MdKeyboardDoubleArrowRight /></button>
                    </div>
                }
            </div>
        </div>
    );
};