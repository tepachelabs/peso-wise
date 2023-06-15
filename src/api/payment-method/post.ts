// ** Next Imports
import type { NextApiRequest, NextApiResponse } from 'next';

// ** Third Party Imports
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';

// ** Model Imports
import { User } from '@/models/user';

// Auth Option Import
import { authOptions } from '@/auth';

const prisma = new PrismaClient();

export const post = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { name } = JSON.parse(req.body);

  try {
    const session = await getServerSession(req, res, authOptions);

    if (!session || !session.user || !session.user.email) {
      res.status(401).json({ message: "You must be logged in." });
      return;
    }

    const user = new User();
    const foundUser = await user.find(session.user.email);

    if (!foundUser) {
      res.status(404).json({ message: "User does not exist." });
      return;
    }

    const newPaymentMethod = await prisma.paymentMethod.create({
      data: {
        name,
        userId: foundUser.id,
      },
    });

    res.status(201).json(newPaymentMethod);
  } catch (error) {
    res.status(400).json({
      error
    });
  }
};
