import Card from "./Card";
import {  useEffect } from "react";
import { AppState } from "@/redux/reducer";
import { getPokemons } from "@/redux/actions";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Loader from "./Loader";

const PokemonList = () => {

    const data = useAppSelector((state?: AppState) => state?.pokemons);
    const isLoading = useAppSelector((state?: AppState) => state?.isLoading);


    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch]);
    
    return (
        <main className="absolute flex w-screen h-screen justify-center top-[120px] md:top-[170px]">
            { isLoading ? <Loader/> :
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
            </div>}
        </main>
    )
};

export default PokemonList;