import Card from "./Card";
import {  useEffect } from "react";
import { AppState } from "@/redux/reducer";
import { getPokemons } from "@/redux/actions";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Filter from "./OrderAndFilter";
import Loader from "./Loader";

const PokemonList = () => {

    const data = useAppSelector((state?: AppState) => state?.pokemons);
    const isLoading = useAppSelector((state?: AppState) => state?.isLoading);


    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch]);
    
    return (
        <main className="flex w-screen h-screen justify-center">
            { isLoading ? <Loader/> :
            <div className="absolute top-[120px] md:top-[170px] grid md:grid-cols-3 lg:grid-cols-4 w-10/12 gap-5 lg:gap-8">
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
            </div>}
            <Filter/>
        </main>
    )
};

export default PokemonList;