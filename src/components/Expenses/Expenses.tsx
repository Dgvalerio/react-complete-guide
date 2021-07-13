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

  return (
    <div className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenses
        .filter((item) => item.date.getFullYear() === +filteredYear)
        .map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </div>
  );
};

export default Expenses;
