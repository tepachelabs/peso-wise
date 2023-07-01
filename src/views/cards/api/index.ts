import axios from 'axios';

// ** Types
import {Card, CardResponse} from '@/types/cards';

export const fetchCards = () => {
  return axios.get<Card[]>('/api/payment-method');
};

export const createCard = (name: string) => {
  return axios.post<CardResponse>('/api/payment-method', {name});
};

export const updateCard = (cardId: string, name: string) => {
  return axios.patch<CardResponse>(
    '/api/payment-method',
    {name},
    {
      params: {
        cardId,
      },
    },
  );
};

export const deleteCard = (cardId: string) => {
  return axios.delete<CardResponse>('/api/payment-method', {
    params: {
      cardId,
    },
  });
};
