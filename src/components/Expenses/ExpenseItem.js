import React, { useState } from "react";
import "../css/ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"
import Card from "../commonUI/Card"


const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title)
  const [expenseDate, setExpenseDate] = useState(props.date)
 
  const clickHandler = () => {
    setTitle('Updated!')
    setExpenseDate(new Date(2023, 2, 14))
    console.log(title, expenseDate)
  }
    
    return (
      <Card className="expense-item">
        <ExpenseDate date={expenseDate} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick = {clickHandler}>Click Button</button>
      </Card>
    );
}

export default ExpenseItem