// ** Next
import {NextApiRequest, NextApiResponse} from 'next';

// ** Third Party
import {getServerSession} from 'next-auth';
import {authOptions} from '@/auth';
import {User} from '@/models/user';

export const auth = (
  handler: (req: NextApiRequest, res: NextApiResponse) => void,
) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const session = await getServerSession(req, res, authOptions);

      if (!session || !session.user || !session.user.email) {
        res.status(401).json({message: 'You must be logged in.'});
        return;
      }

      const user = new User();
      const foundUser = await user.find(session.user.email);

      if (!foundUser) {
        res.status(404).json({message: 'User does not exist.'});
        return;
      }

      req.user = foundUser;

      return handler(req, res);
    } catch {
      res.status(500).json({message: 'Something went wrong.'});
    }
  };
};
