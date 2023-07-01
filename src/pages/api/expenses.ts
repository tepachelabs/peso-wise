import type {NextApiRequest, NextApiResponse} from 'next';

// ** db
import {post, get} from '@/api/expenses';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {method} = req;

  switch (method) {
    case 'GET':
      return get(req, res);

    case 'POST':
      return post(req, res);

    case 'PATCH':
    // return patch(req, res);

    case 'DELETE':
    // return deleteCard(req, res);

    default:
      return null;
  }
};

export default handler;
