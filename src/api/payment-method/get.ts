// ** Next Imports
import type { NextApiRequest, NextApiResponse } from 'next';

// ** Third Party Imports
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';

// Auth Option Import
import { authOptions } from '@/auth';

const prisma = new PrismaClient();

export const get = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { name = '' } = req.body;

  try {
    const session = await getServerSession(req, res, authOptions);

    if (!session || !session.user || !session.user.email) {
      res.status(401).json({ message: "You must be logged in." });
      return;
    }

    const paymentMethods = await prisma.paymentMethod.findMany();

    res.status(200).json(paymentMethods);
  } catch (error) {
    res.status(400).json({
      error
    });
  }
};
