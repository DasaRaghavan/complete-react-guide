import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const App = () => {
  return (
    <div>
      <h1>Let's get started</h1>
      <NewExpense />
      <Expenses />
    </div>
  ); 
}
export default App