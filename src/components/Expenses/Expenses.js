import React, { useState } from "react";
import "../css/expenses.css"
import ExpenseItem from "./ExpenseItem"
import Card from "../commonUI/Card.js"
import ExpenseFilter from './ExpenseFilter.js'

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2020')

    const FilterChangeHandler = (changeYear) => {
      setSelectedYear(changeYear)
    }
    console.log(selectedYear)

    // filter the expense array being received as props.items and render the filered expense array
    const filteredExpenses = props.items.filter((e) => 
      e.date.getUTCFullYear().toString() === selectedYear
    )

    let expensesList = <p>No Expenses Found</p>

    if (filteredExpenses.length !== 0) {
      expensesList = filteredExpenses.map((expense) => (
        <ExpenseItem 
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />))
      }
    

    return (
      <div>
          <Card className="expenses">
            <ExpenseFilter initialSelection={selectedYear} onFilterChange={FilterChangeHandler} />
            {expensesList}
          </Card>
      </div>
    );
}

export default Expenses