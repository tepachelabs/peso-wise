import Image from 'next/image';
import { useRouter } from 'next/router';

import { signIn, useSession } from 'next-auth/react';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import GOOGLE_ICON from '@/icons/google.svg';

const Login = () => {
  const router = useRouter();
  const session = useSession();

  if (session.data) {
    router.push('/home')
  }

  return (
    <Grid
      height="100%"
      container
      alignItems="center"
    >
      <Grid
        item
        p={4}
        md={6}
        justifyContent="center"
      >
        <Typography variant="h4" component="h1" fontWeight={500}>
          Welcome to Pesowise!
        </Typography>
        <Typography mb={2} variant="subtitle1">
          Continue with Google!
        </Typography>
        <Button
          onClick={() => signIn('google')}
          sx={{
            borderRadius: 1,
            borderStyle: 'solid',
            borderWidth: 1,
            px: 6,
          }}
        >
          <Image
            width={24}
            height={24}
            src={GOOGLE_ICON}
            alt="Google"
          />
          <Typography
            fontWeight={700}
            ml={1}
          >
            Login In With Google
          </Typography>
        </Button>

      </Grid>
      <Grid
        item
        md={6}
        height="100%"
        width="100%"
        sx={{
          background: 'radial-gradient(circle, rgba(229,190,236,1) 0%, rgba(145,127,179,1) 100%)'
        }}
      >
      </Grid>
    </Grid>
  )
};

export default Login;
