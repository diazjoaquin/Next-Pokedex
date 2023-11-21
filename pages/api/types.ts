import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
import prismadb from '@/libs/prismadb';


export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).end();
    }

    try {
        const types = await axios.get('https://pokeapi.co/api/v2/type/?offset=0&limit=18')
        .then(res => res.data.results.map(async (type: any) => {
            prismadb.type.create({
                data: {
                    name: type.name
                }
            });
        }));

        return res.status(200).json(types);

    } catch (error) {
        throw new Error ("Invalid Request");
    }
}