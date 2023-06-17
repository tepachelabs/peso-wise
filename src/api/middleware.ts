// ** Next
import { NextApiRequest, NextApiResponse } from 'next';

// ** Third Party
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';

export const auth = (handler: (req: NextApiRequest, res: NextApiResponse) => void) => {

  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const session = await getServerSession(req, res, authOptions);

      if (!session || !session.user || !session.user.email) {
        res.status(401).json({ message: "You must be logged in." });
        return;
      }

      return handler(req, res);
    } catch {
      res.status(500).json({ message: "Something went wrong." });
    }
  }
};
