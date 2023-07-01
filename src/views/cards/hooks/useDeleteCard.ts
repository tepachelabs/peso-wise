import {useState} from 'react';

// ** Third Party
import axios, {AxiosError} from 'axios';

// ** Types
import {CardResponse} from '@/types/cards';
import {ErrorMessage} from '@/api/types/error';

// ** API
import {deleteCard} from '@/views/cards/api';

// ** Constants
import {ERROR_GENERIC_UNKNOWN_MESSAGE} from '@/api/constants';

export const useDeleteCard = (cardId: string) => {
  const [responseCard, setResponseCard] = useState<CardResponse | null>(null);
  const [error, setError] = useState<ErrorMessage>({
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (cardName: string, cb?: () => void) => {
    setIsLoading(true);

    deleteCard(cardId)
      .then((res) => {
        if (cb) {
          cb();
        }
        setResponseCard(res.data);
      })
      .catch((error) => {
        if (axios.isAxiosError(error) && error.response) {
          const _error = error as AxiosError<ErrorMessage>;
          setError({
            message: _error?.response?.data.message ?? '',
          });
        } else {
          setError({
            message: ERROR_GENERIC_UNKNOWN_MESSAGE,
          });
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {responseCard, error, isLoading, handleSubmit};
};
