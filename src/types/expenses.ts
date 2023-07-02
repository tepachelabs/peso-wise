import {Card} from '@/types/cards';

export interface ExpenseCreateParams {
  title: string;
  amount: number;
  cardId: string;
}

export interface Expense {
  id: string;
  title: string;
  amount: number;
  currency: string;
  userId: string;
  paymentMethodId: string;
  PaymentMethod: Card;
}
