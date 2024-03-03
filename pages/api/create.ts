import prismadb from '@/libs/prismadb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler (req: NextApiRequest, res: NextApiResponse) {


    if (req.method !== 'POST') {
        return res.status(405).end();
    };

    try {

        let { 
            name, 
            hp, 
            attack, 
            defense, 
            speed, 
            height, 
            weight, 
            imgUrl, 
            types, 
            custom, 
            createdBy } = req.body;

        const existingPokemon = await prismadb.pokemon.findUnique({
            where: {
                name,
            }
        });

        if (existingPokemon) {
            return res.status(422).end();

        };

        if (!name || !hp || !attack || !defense || !speed || !height || !weight || !custom || !createdBy) {
            throw new Error ("Missing parameters");
        }        

        if (!imgUrl) {
            imgUrl = "@/public/images/default.png";
        }

        if (!types) {
            types = ['normal'];
        }

        const pokemon = await prismadb.pokemon.create({
            data: {
                name,
                hp,
                attack,
                defense,
                speed,
                height,
                weight,
                imgUrl,
                custom,
                createdBy,
                types
            }
        });

        return res.status(200).end();

        
        
    } catch (error: any) {
        console.error('Error in API handler:', error.message);
        return res.status(400).end();
        
    };
};