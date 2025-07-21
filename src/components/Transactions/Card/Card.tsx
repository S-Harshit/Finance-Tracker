
import type { Transaction } from '../Transaction'; // adjust path as needed


export const Card = ({ transaction } : {transaction: Transaction}) => {
  return (
    <div className="transaction-card">
      <span>{transaction.date}</span>
      <h4>{transaction.category}</h4>
      <p>{transaction.description}</p>
      <span>{transaction.amount}</span>
      <span>{transaction.paymentMethod}</span>
   
      <span>{transaction.type}</span>
    </div>
  );
};