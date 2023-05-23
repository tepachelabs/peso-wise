import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const {
    title = '',
    amount = 0,
    currency = 'MXN'
  } = req.body;

  const newExpense = await prisma.expense.create({
    data: {
      amount,
      currency,
      title
    }
  });

  const expenses = await prisma.expense.findMany();

  res.status(200).json(expenses);
};

export default handler;
