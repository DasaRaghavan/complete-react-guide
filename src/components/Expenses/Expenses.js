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


    return (
      <div>
          <Card className="expenses">
            <ExpenseFilter initialSelection={selectedYear} onFilterChange={FilterChangeHandler} />
            {filteredExpenses.map((expense) => 
             (<ExpenseItem 
              key={expense.id}
              title={expense.title} 
              amount={expense.amount} 
              date={expense.date} />)) }
          </Card>
      </div>
    );
}

export default Expenses