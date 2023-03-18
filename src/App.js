import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const App = () => {

  const newExpenseHandler = (expense) => {
    console.log("in App.js")
    console.log(expense)
  }
  return (
    <div>
      <NewExpense onNewExpense={newExpenseHandler} />
      <Expenses />
    </div>
  ); 
}
export default App