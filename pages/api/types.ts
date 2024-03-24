import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    const types = await axios.get(
      "https://pokeapi.co/api/v2/type/?offset=0&limit=18"
    );

    const result: any = [];
    const data = types.data?.results.map((type: any) => {
      result.push(type.name);
    });
    return res.status(200).json(result);
  } catch (error) {
    throw new Error("Invalid Request");
  }
}
