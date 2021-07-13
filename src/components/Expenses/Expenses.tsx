import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

interface IExpense {
  title: string;
  amount: number;
  date: Date;
}

const Expenses = ({ expenses }: { expenses: IExpense[] }) => (
  <div className="expenses">
    {expenses.map((expense) =>
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />)}
  </div>
);

export default Expenses;