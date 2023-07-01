// ** Next Imports
import type { NextApiRequest, NextApiResponse } from 'next';

// ** API
import { get, post, patch } from '@/api/payment-method';

export const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      return get(req, res);

    case 'POST':
      return post(req, res);

    case 'PATCH':
      return patch(req, res);

    default:
      return null;
  }
};

export default handler;
