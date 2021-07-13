import React, { useState } from 'react';

import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

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

  return (
    <div className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList expenses={filteredExpenses} />
    </div>
  );
};

export default Expenses;
