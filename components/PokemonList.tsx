import Card from "./Card";
import {  useEffect, useState } from "react";
import { AppState } from "@/redux/reducer";
import { getPokemons } from "@/redux/actions";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Filter from "./OrderAndFilter";
import Loader from "./Loader";
import { 
    MdKeyboardArrowRight, 
    MdKeyboardArrowLeft, 
    MdKeyboardDoubleArrowLeft, 
    MdKeyboardDoubleArrowRight } 
from "react-icons/md";
import { Pagination } from "./Pagination";

const PokemonList = () => {

    const data = useAppSelector((state?: AppState) => state?.pokemons);
    const isLoading = useAppSelector((state?: AppState) => state?.isLoading);
    const dispatch = useAppDispatch();

    // pagination:

    const [ itemsPerPage ] = useState(12);
    const [ currentPage, setCurrentPage ] = useState(1);
    const lastItem = currentPage * itemsPerPage;
    const firstItem = lastItem - itemsPerPage;
    const currentItems = data?.slice(firstItem, lastItem);
    const numOfPages = data && data.length/itemsPerPage;

    //next & previous:

    const handleNext = () => {
        currentPage <= (numOfPages as number) ? setCurrentPage(currentPage + 1) : setCurrentPage(currentPage);
    };

    const handlePrevious = () => {
        currentPage > 1 ? setCurrentPage(currentPage - 1) : setCurrentPage(currentPage);
    };


    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch]);
    
    return (
        <main className="flex w-screen h-screen justify-center">
            <Pagination currentPage={currentPage} handleNext={handleNext} handlePrevious={handlePrevious}/>
            { isLoading ? <Loader/> :
            <div className="absolute top-[170px] md:top-[200px] grid md:grid-cols-3 lg:grid-cols-4 w-10/12 gap-5 lg:gap-8">
                {
                    currentItems?.map((pokemon: any) => {
                        return (
                            <Card
                            key={pokemon.id}
                            id={pokemon.id}
                            hp={pokemon.hp}
                            name={pokemon.name}
                            attack={pokemon.attack}
                            defense={pokemon.defense}
                            imgUrl={pokemon.imgUrl}
                            types={pokemon.types}
                        />)
                })
                }
            </div>}
            <Filter/>
        </main>
    )
};

export default PokemonList;