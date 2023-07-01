// ** Next Imports
import type {NextApiRequest, NextApiResponse} from 'next';

// ** API
import {auth} from '@/api/middleware';

// ** db
import {prisma} from '@/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const cardId = req.query.cardId as string;

    const deletedPaymentMethod = await prisma.paymentMethod.delete({
      where: {
        id: cardId,
      },
    });

    res.status(201).json(deletedPaymentMethod);
  } catch (error) {
    res.status(400).json(error);
  }
};

// export const deleteCard = auth(handler);
export const deleteCard = auth(handler);
