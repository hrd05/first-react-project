import { React, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    locationOfExpenditure: "Wallmart",
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12), locationOfExpenditure: 'Wallmart' },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    locationOfExpenditure: "Tesla",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
    locationOfExpenditure: "Ikea",
  },
];

const App = () => {

  const [expenses, setExepnses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // console.log('in app.js')
    setExepnses((prevExpense) => {
      return ([expense, ...prevExpense]);
    });
  }

  return (

    <div >
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
