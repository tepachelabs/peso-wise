import {useEffect, useState} from 'react';

// ** API
import {fetchExpenses} from '@/views/expenses/api';

// ** Types
import {Expense} from '@/types/expenses';

export const useExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const renewExpenses = () => {
    fetchExpenses()
      .then((res) => {
        setExpenses(res.data);
      })
      .catch(() => {
        setExpenses([]);
      });
  };

  useEffect(() => {
    renewExpenses();
  }, []);

  return {expenses, renewExpenses};
};
