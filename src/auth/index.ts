import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { User  } from '@/models/user';

export const authOptions: AuthOptions = {
  events: {
    signIn: async ({ user}) => {
      const newUser = new User();
      await newUser.create(user.name ?? 'John', user.email ?? 'idk@gmail.com')
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      },
    }),
  ],
};
