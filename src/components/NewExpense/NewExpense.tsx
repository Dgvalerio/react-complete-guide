import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import { IExpense } from '../Expenses/Expenses';

const NewExpense = ({ onAddExpense }: { onAddExpense: (expense: IExpense) => void }) => {
  const saveExpenseDataHandler = (enteredExpenseData: IExpense) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
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