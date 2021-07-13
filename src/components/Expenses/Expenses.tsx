import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

export interface IExpense {
  id?: string;
  title: string;
  amount: number;
  date: Date;
}

const Expenses = ({ expenses }: { expenses: IExpense[] }) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear: string) => setFilteredYear(selectedYear);

  return (
    <div className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {expenses
        .filter((item) => item.date.getFullYear() === +filteredYear)
        .map((expense) =>
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />)}
    </div>
  );
};

export default Expenses;