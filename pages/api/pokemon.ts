import { NextApiRequest, NextApiResponse } from "next";
import { GetPokemonByName } from "@/pages/api/controllers/GetPokemonByName";


export default async function handler (req: NextApiRequest, res: NextApiResponse) {

    if (req.method !== 'GET') {
        return res.status(405).end();
    }

    const { name } = req.query;

    try {

        if (name) {
            const pokemon = await GetPokemonByName(name as string);

            if (!pokemon) {
                throw new Error ('Cannot find your pokemon!')
            } return res.status(200).json(pokemon);
        }
    } catch (error) {
        res.status(500).json({ message:'Internal Server Error' });
    }

    
}

