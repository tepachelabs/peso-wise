import {useState, useEffect} from 'react';

// Third Party
import axios, {AxiosError} from 'axios';

// ** API
import {fetchCards} from '@/views/cards/api';

// ** Types
import {Card} from '@/types/cards';
import {ErrorMessage} from '@/api/types/error';

// ** Constants
import {ERROR_GENERIC_UNKNOWN_MESSAGE} from '@/api/constants';

export const useCards = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [error, setError] = useState<ErrorMessage>({
    message: '',
  });

  const renewCards = () => {
    fetchCards()
      .then((res) => {
        setCards(res.data);
      })
      .catch((error) => {
        if (axios.isAxiosError(error) && error.response) {
          setError({
            message: error.response.data.message,
          });
        } else {
          setError({
            message: ERROR_GENERIC_UNKNOWN_MESSAGE,
          });
        }

        setCards([]);
      });
  };

  useEffect(() => {
    renewCards();
  }, []);

  return {cards, error, renewCards};
};
