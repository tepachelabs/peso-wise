// ** Next Imports
import type { NextApiRequest, NextApiResponse } from 'next';

// **
import { get, post } from '@/api/payment-method';

const methods = {
  GET: get,
  POST: post,
};

export const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      return get(req, res);

    case 'POST':
      return post(req, res);

    default:
      return null;
  }
};

export default handler;
