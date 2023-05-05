import { NextApiResponse } from "next";

interface IDataTypes {
  success: boolean;
  message: string;
  result?: object;
}

export const response = (
  res: NextApiResponse,
  msg: string,
  result: object,
  status: number = 200
) => {
  let success = true;
  if (status >= 400) {
    success = false;
  }

  let data: IDataTypes = {
    success,
    message: msg,
  };

  if (result) {
    data.result = result;
  }

  return res.status(status).json(data);
};
