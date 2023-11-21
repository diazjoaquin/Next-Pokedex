import usePokemonList from "@/hooks/usePokemonList";
import Card from "./Card";

const PokemonList = () => {

    const { data } = usePokemonList();
    console.log(data);
    

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
        </main>
    )
};

export default PokemonList;