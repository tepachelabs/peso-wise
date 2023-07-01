import {FC} from 'react';
import {Alert, AlertTitle} from '@mui/material';

interface Props {
  message?: string;
}

export const AlertError: FC<Props> = ({message}) => {
  if (!message) {
    return null;
  }

  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      {message}
    </Alert>
  );
};
