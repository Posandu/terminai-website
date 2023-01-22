import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    version: string;
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
    res.status(200).json({ version: "1.0.7" });
};

export default handler;
