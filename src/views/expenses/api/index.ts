// ** Third Party
import axios from 'axios';

// ** Types
import {Expense, ExpenseCreateParams} from '@/types/expenses';

export const fetchExpenses = () => {
  return axios.get<Expense[]>('/api/expenses');
};

export const createExpense = (body: ExpenseCreateParams) => {
  return axios.post<Expense>('/api/expenses', body);
};
