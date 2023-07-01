// ** Next Imports
import type {NextApiRequest, NextApiResponse} from 'next';

// ** API
import {auth} from '@/api/middleware';

// ** db
import {prisma} from '@/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const cardId = req.query.cardId as string;

    const {name} = req.body;

    const updatedPaymentMethod = await prisma.paymentMethod.update({
      where: {
        id: cardId,
      },
      data: {
        name,
      },
    });

    res.status(200).json(updatedPaymentMethod);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const patch = auth(handler);
