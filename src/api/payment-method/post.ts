// ** Next Imports
import type { NextApiRequest, NextApiResponse } from 'next';

// ** API
import { auth } from '@/api/middleware';

// ** db
import {prisma} from '@/db';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { user } = req;

    const { name } = req.body;

    const newPaymentMethod = await prisma.paymentMethod.create({
      data: {
        name,
        userId: user.id,
      },
    });

    res.status(201).json(newPaymentMethod);
  } catch (error) {
    res.status(400).json({
      error
    });
  }
};

export const post = auth(handler);
