import {User} from '@/types/user';

declare module 'next' {
  interface NextApiRequest {
    user: User;
  }
}
