// ** Third Party Imports
import NextAuth from 'next-auth';

// ** Local Auth Import
import { authOptions } from '@/auth';

export default NextAuth(authOptions);
