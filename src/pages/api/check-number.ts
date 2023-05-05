// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "utils/prisma";
import { response } from "utils/responseMsg";

type Data = {
  numberOfTest: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  switch (method) {
    case "POST":
      const { numberOfTest } = req.body;
      const data = await prisma.user.findUnique({
        where: { participant_number: numberOfTest },
      });
      if (data) {
        return response(res, "Berhasil mengambil data", data);
      }
      return response(res, "Nomor yang anda masukan salah", {});
    default:
      return res.status(404).json({ message: "Service not found" });
  }
}
