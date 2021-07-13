import React, { ChangeEvent, FormEvent, useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: 0,
  //   enteredDate: '',
  // });

  const onChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    switch (target.name) {
      case 'title':
        setTitle(target.value);
        // setUserInput((prevState) => ({ ...prevState, enteredTitle: target.value }))
        break;
      case 'amount':
        setAmount(+target.value);
        // setUserInput((prevState) => ({ ...prevState, enteredAmount: +target.value }))
        break;
      case 'date':
        setDate(target.value);
        // setUserInput((prevState) => ({ ...prevState, enteredDate: target.value }))
        break;
    }
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const expenseData = {
      title,
      amount,
      date,
    };

    setDate('');
    setAmount(0);
    setTitle('');

    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input name="title" type="text" value={title} onChange={onChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input name="amount" type="number" min="0.01" step="0.01" value={amount} onChange={onChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input name="date" type="date" min="2019-01-01" max="2022-12-31" value={date} onChange={onChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;