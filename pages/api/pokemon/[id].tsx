import { NextApiRequest, NextApiResponse } from "next";
import GetPokemonById from "../controllers/GetPokemonById";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try {
        if (req.method !== 'GET') {
            return res.status(405).end();
        }

        const { id } = req.query;
        // console.log(id);
        

        if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid ID' });

        if (!id) return res.status(400).json({ error: 'Missing ID' });

       const data = await GetPokemonById(id); 
       return res.status(200).json(data);

    } catch (error) { 
        throw new Error ('Error fetching details');
    }
};