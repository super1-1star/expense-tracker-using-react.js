import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  {
    id: "e2",
    title: "Pen",
    amount: 94.12,
    date: new Date(2021, 8, 14),
  },
  {
    id: "e3",
    title: "Pencil",
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  {
    id: "e4",
    title: "cookies",
    amount: 94.12,
    date: new Date(2020, 3, 14),
  },
  {
    id: "e5",
    title: "Cricket Bat",
    amount: 94.12,
    date: new Date(2020, 10, 14),
  },
  { id: "e6", title: "New TV", amount: 799.49, date: new Date(2022, 2, 12) },
  {
    id: "e7",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2019, 2, 28),
  },
  {
    id: "e8",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2018, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
