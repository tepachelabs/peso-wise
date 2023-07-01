// ** Next Imports
import type {NextApiRequest, NextApiResponse} from 'next';

// ** API
import {auth} from '@/api/middleware';

// ** db
import {prisma} from '@/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const paymentMethods = await prisma.paymentMethod.findMany();

    res.status(200).json(paymentMethods);
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

export const get = auth(handler);
