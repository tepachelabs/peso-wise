// ** Next Imports
import type {NextApiRequest, NextApiResponse} from 'next';

// ** API
import {auth} from '@/api/middleware';

// ** db
import {prisma} from '@/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {user} = req;

    const {cardId, title, amount} = req.body;

    const newExpense = await prisma.expense.create({
      data: {
        userId: user.id,
        currency: 'MXN',
        paymentMethodId: cardId,
        amount,
        title,
      },
    });

    res.status(201).json(newExpense);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

export const post = auth(handler);
