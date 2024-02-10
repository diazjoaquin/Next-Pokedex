import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/libs/prismadb';
import axios from "axios";
// import { GetPokemonByName } from "@/pages/api/controllers/GetPokemonByName";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {

    if (req.method !== 'GET') {
        return res.status(405).end();
    }

    try {

        const api = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=251');
        const all = await Promise.all(api.data.results?.map((pokemon: any) => axios.get(pokemon.url)));

        const result = all.map((pokemon: any) => {
            return {
                id: pokemon.data.id,
                name: pokemon.data.name,
                hp: pokemon.data.stats[0].base_stat,
                attack: pokemon.data.stats[1].base_stat,
                defense: pokemon.data.stats[2].base_stat,
                speed: pokemon.data.stats[5].base_stat,
                height: pokemon.data.height,
                weight: pokemon.data.weight,
                imgUrl: pokemon.data.sprites.other.home.front_default,
                custom: false,
                types: pokemon.data.types.map((type: any) => type.type.name)
            }
        });

        const pokemons = await prismadb.pokemon.findMany();
        return res.status(200).json([...result, ...pokemons])
        
    } catch (error) {
        throw new Error ("Invalid Request");
    }
};