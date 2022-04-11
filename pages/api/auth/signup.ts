// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "lib/dbConnect";
import UserModel from "models/User.model";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  switch (req.method) {
    case "POST":
      const user = await UserModel.create(req.body);
      return res.status(200).json(user);

    default:
      return res.status(405).send("method not allowed");
  }
}
