import {useState} from 'react';

// ** Third Party
import axios, {AxiosError} from 'axios';

// ** API
import {createExpense} from '@/views/expenses/api';

// ** Types
import {Expense, ExpenseCreateParams} from '@/types/expenses';

// ** Constants
import {ERROR_GENERIC_UNKNOWN_MESSAGE} from '@/api/constants';

export const useCreateExpense = () => {
  const [responseExpense, setResponseExpense] = useState<Expense | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (body: ExpenseCreateParams, cb?: () => void) => {
    setIsLoading(true);

    createExpense(body)
      .then((res) => {
        if (cb) {
          cb();
        }
        setResponseExpense(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {responseExpense, isLoading, handleSubmit};
};
