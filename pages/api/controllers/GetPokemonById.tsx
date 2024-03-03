import axios, { AxiosResponse } from 'axios';
import prismadb from '@/libs/prismadb';

export async function GetPokemonByIdFromApi (id: string) {
    
    const api: AxiosResponse  = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        return {
            id: api.data.id,
            name: api.data.name,
            hp: api.data.stats[0].base_stat,
            attack: api.data.stats[1].base_stat,
            defense: api.data.stats[2].base_stat,
            speed: api.data.stats[5].base_stat,
            height: api.data.height,
            weight: api.data.weight,
            imgUrl: api.data.sprites.other.home.front_default,
            custom: false,
            types: api.data.types.map((type: {
                type : {
                    name: string
                } 
            }) => type.type.name)
        }
};

export async function getPokemonsByIdFromDb (id: string) {

    const pokemon = await prismadb.pokemon.findUnique({
        where: {
            id: id
        },
    });

    return pokemon;
}