import Card from "./Card";
import OrderAndFilter from "./OrderAndFilter";
import {  useEffect } from "react";
import { AppState } from "@/redux/store";
import { getPokemons } from "@/redux/actions";
import { useAppDispatch  } from "@/redux/hooks";
import { useSelector } from "react-redux";

const PokemonList = () => {

    const pokemons = useSelector((state?: AppState) => state?.pokemons);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch]);
    
    return (
        <main className="flex w-screen h-screen justify-center items-center">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 w-[80%] h-[60%] gap-5 lg:gap-8">
                {
                pokemons?.map((pokemon: any) => {
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