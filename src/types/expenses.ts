export interface Expense {
  id: string;
  title: string;
  amount: number;
  currency: string;
  userId: string;
  paymentMethodId: string;
}
