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

    return (
      <div>
          <Card className="expenses">
            <ExpenseFilter initialSelection={selectedYear} onFilterChange={FilterChangeHandler} />
            <ExpenseItem
              title={props.items[0].title}
              amount={props.items[0].amount}
              date={props.items[0].date}
            />
            <ExpenseItem
              title={props.items[1].title}
              amount={props.items[1].amount}
              date={props.items[1].date}
            />
            <ExpenseItem
              title={props.items[2].title}
              amount={props.items[2].amount}
              date={props.items[2].date}
            />
            <ExpenseItem
              title={props.items[3].title}
              amount={props.items[3].amount}
              date={props.items[3].date}
            />
          </Card>
      </div>
    );
}

export default Expenses