import { NextApiRequest, NextApiResponse } from "next";
import {GetPokemonByIdFromApi, getPokemonsByIdFromDb} from "../controllers/GetPokemonById";
import prismadb from '@/libs/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try {

        const { id } = req.query;

        if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid ID' });

        if (!id) return res.status(400).json({ error: 'Missing ID' });

        if (req.method === 'DELETE') {
           await prismadb.pokemon.delete({
            where: {
                id: id
            }
           });
           return res.status(200).json({
            message: "Pokemon succesfully deleted"
           });
        }

        if (req.method === 'GET') {
            if (/[a-zA-Z]/.test(id)) {
                const db = await getPokemonsByIdFromDb(id);
                return res.status(200).json(db);
                } else {
                const api = await GetPokemonByIdFromApi(id);
                return res.status(200).json(api);
            }
        };

    } catch (error: any) { 

        console.log(error);
        res.status(400).send(error.message);
    }
};