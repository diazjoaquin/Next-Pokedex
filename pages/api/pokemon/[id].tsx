import { NextApiRequest, NextApiResponse } from "next";
import {GetPokemonByIdFromApi, getPokemonsByIdFromDb} from "../controllers/GetPokemonById";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try {
        if (req.method !== 'GET') {
            return res.status(405).end();
        }

        const { id } = req.query;

        if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid ID' });

        if (!id) return res.status(400).json({ error: 'Missing ID' });

        if (/[a-zA-Z]/.test(id)) {
        const db = await getPokemonsByIdFromDb(id);
        return res.status(200).json(db);
       } else {
        const api = await GetPokemonByIdFromApi(id);
        return res.status(200).json(api);
       }

    } catch (error) { 
        throw new Error ('Error fetching details');
    }
};