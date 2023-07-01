import type {NextApiRequest, NextApiResponse} from 'next';

// ** db
import {prisma} from '@/db';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    title = '',
    amount = 0,
    currency = 'MXN',
    paymentMethodId,
    userId,
  } = req.body;

  try {
    const newExpense = await prisma.expense.create({
      data: {
        amount,
        currency,
        title,
        paymentMethodId,
        userId,
      },
    });

    const expenses = await prisma.expense.findMany();

    res.status(201).json(expenses);
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

export default handler;
