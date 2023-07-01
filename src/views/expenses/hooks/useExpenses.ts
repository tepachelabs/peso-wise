import {useEffect, useState} from 'react';

// ** Third Party
import axios from 'axios';

// ** Types
import {Expense} from '@/types/expenses';

export const useExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    axios
      .get('/api/expenses')
      .then((res) => {
        setExpenses(res.data);
      })
      .catch(() => {
        setExpenses([]);
      });
  }, []);

  return {expenses};
};
