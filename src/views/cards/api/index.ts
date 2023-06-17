import axios from 'axios';

// ** Types
import { Card } from '@/types/cards';

export const fetchCards = () => {
  return axios.get<Card[]>('/api/payment-method');
}

export const createCard = (name: string) => {
  return axios.post('/api/payment-method', { name });
};
