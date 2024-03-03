import prismadb from '@/libs/prismadb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler (req: NextApiRequest, res: NextApiResponse) {


    if (req.method !== 'POST') {
        return res.status(405).end();
    };

    try {

        const { 
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
            return res.status(422).json({
                error: "Pokemon already exists"
            });

        };

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
                types,
                custom,
                createdBy
            }
        });

        return res.status(200).json(pokemon);

        
        
    } catch (error) {
        console.log(error);
        return res.status(400).end();
        
    };
};