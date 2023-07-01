import {FC} from 'react';

// ** MUI
import {Button} from '@mui/material';

interface Props {
  handleSubmit: () => void;
  handleCancel: () => void;
  isSubmitDisabled: boolean;
  isCancelDisabled: boolean;
}

export const DrawerFooter: FC<Props> = ({
  isSubmitDisabled,
  isCancelDisabled,
  handleSubmit,
  handleCancel,
}) => {
  return (
    <>
      <Button
        disabled={isSubmitDisabled}
        sx={{mr: 2}}
        onClick={handleSubmit}
        variant="contained"
      >
        Guardar
      </Button>
      <Button
        disabled={isCancelDisabled}
        onClick={handleCancel}
        variant="outlined"
      >
        Cancelar
      </Button>
    </>
  );
};
