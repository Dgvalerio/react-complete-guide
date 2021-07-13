import React from 'react';

import { IExpense } from '../Expenses/Expenses';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = ({
  onAddExpense,
}: {
  onAddExpense: (expense: IExpense) => void;
}): JSX.Element => {
  const saveExpenseDataHandler = (enteredExpenseData: IExpense) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
