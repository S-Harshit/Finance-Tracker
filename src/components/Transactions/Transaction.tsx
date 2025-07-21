import { Card } from "./Card/Card";

type TransactionType = 'income' | 'expense';
type PaymentMethod = 'Cash' | 'Credit Card' | 'Debit Card' | 'Bank Transfer' | 'UPI' | 'Other';

export interface Transaction {
  id: number;
  date: string; // You could use Date instead if you're storing real Date objects
  type: TransactionType;
  category: string;
  amount: number;
  description: string;
  paymentMethod: PaymentMethod;
}

const transactions : Transaction[]  = [
  {
    id: 1,
    date: '2025-07-20',
    type: 'income', // or 'expense'
    category: 'Salary',
    amount: 3500.00,
    description: 'Monthly salary from company',
    paymentMethod: 'Bank Transfer',
  },
  {
    id: 2,
    date: '2025-07-21',
    type: 'expense',
    category: 'Groceries',
    amount: 85.75,
    description: 'Weekly grocery shopping',
    paymentMethod: 'Credit Card',
  },
  {
    id: 3,
    date: '2025-07-21',
    type: 'expense',
    category: 'Transportation',
    amount: 15.00,
    description: 'Gas for car',
    paymentMethod: 'Cash',
  },
  {
    id: 4,
    date: '2025-07-19',
    type: 'income',
    category: 'Freelance',
    amount: 600.00,
    description: 'Freelance web design project',
    paymentMethod: 'UPI',
  },
];

const Transactions = () => {
return <>{transactions.map((transaction:Transaction)=><Card transaction={transaction}/>)}</>
  
}

export default Transactions;