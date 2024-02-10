import Card from "./Card";
import OrderAndFilter from "./OrderAndFilter";
import {  useEffect } from "react";
import { AppState } from "@/redux/store";
import { getPokemons } from "@/redux/actions";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const PokemonList = () => {

    const data = useAppSelector((state?: AppState) => state?.pokemons);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch]);
    
    return (
        <main className="flex w-screen h-screen justify-center items-center">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 w-[80%] h-[60%] gap-5 lg:gap-8">
                {
                data?.map((pokemon: any) => {
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
            </div>
            <OrderAndFilter/>
        </main>
    )
};

export default PokemonList;