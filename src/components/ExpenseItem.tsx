import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = ({ title, amount, date }: { title: string; amount: number; date: Date; }) => (
  <div className="expense-item">
    <div>{date.toDateString()}</div>
    <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-item__price">${amount}</div>
    </div>
  </div>
);

export default ExpenseItem;