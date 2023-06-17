import axios from 'axios';

// ** Types
import { Card, CardCreateResponse } from '@/types/cards';

export const fetchCards = () => {
  return axios.get<Card[]>('/api/payment-method');
}

export const createCard = (name: string) => {
  return axios.post<CardCreateResponse>('/api/payment-method', { name });
};
