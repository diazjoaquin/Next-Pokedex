import { 
    MdKeyboardArrowRight, 
    MdKeyboardArrowLeft, 
    MdKeyboardDoubleArrowLeft, 
    MdKeyboardDoubleArrowRight } 
from "react-icons/md";
import React from 'react';

interface PaginationProps {
    currentPage: number;
    handleNext: () => void;
    handlePrevious: () => void;
}


export const Pagination: React.FC<PaginationProps> = ({currentPage, handleNext, handlePrevious}) => {

    return (
        <div className="absolute top-[150px]">
            <div className="">
                {
                    <div className="flex gap-2 text-white">
                        <button className="border-2 rounded-full bg-red-500 px-2 hover:bg-red-600 hover:scale-110"><MdKeyboardDoubleArrowLeft /></button>
                        <button className="border-2 rounded-full bg-red-500 px-2 hover:bg-red-600 hover:scale-110" onClick={() => handlePrevious()}><MdKeyboardArrowLeft /></button>
                        <button className="rounded-full font-bold border-2 bg-red-500 text-white px-3 py-1">{currentPage}</button>
                        <button className="border-2 rounded-full bg-red-500 px-2 hover:bg-red-600 hover:scale-110" onClick={() => handleNext()}><MdKeyboardArrowRight /></button>
                        <button className="border-2 rounded-full bg-red-500 px-2 hover:bg-red-600 hover:scale-110"><MdKeyboardDoubleArrowRight /></button>
                    </div>
                }
            </div>
        </div>
    );
};