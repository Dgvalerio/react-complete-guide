import React, { useState } from 'react';

import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';

import './Expenses.css';

export interface IExpense {
  id?: string;
  title: string;
  amount: number;
  date: Date;
}

const Expenses = ({ expenses }: { expenses: IExpense[] }): JSX.Element => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear: string) =>
    setFilteredYear(selectedYear);

  const filteredExpenses = expenses.filter(
    (item) => item.date.getFullYear() === +filteredYear
  );

  let expensesContent: JSX.Element | JSX.Element[] = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
    </div>
  );
};

export default Expenses;
