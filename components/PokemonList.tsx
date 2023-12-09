import usePokemonList from "@/hooks/usePokemonList";
import { useState, useRef, useEffect } from "react";
import Card from "./Card";
import OrderAndFilter from "./OrderAndFilter";

const PokemonList = () => {

    const { data } = usePokemonList();
    const [ currentItems ] = useState(12);

    const currentData : any = [];
    console.log(currentData);
    
    
    for (let i = 0; i < data?.length; i += currentItems ) {
        currentData.push([data?.slice(i, i + currentItems)]);
    }

    const [ items, setItems ] = useState(null);
    
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