import React from "react"
import "../css/ExpenseDate.css"
const ExpenseDate = (props) => {
    const expenseMonth = props.date.toLocaleString("en-US", { month: "long" })
    const expenseYear = props.date.getFullYear()
    const expenseDate = props.date.toLocaleString("en-US", { day: "2-digit" })
    
    return (
      <div className="expense-date">
        <div className="expense-date__month">{expenseMonth}</div>
        <div className="expense-date__year">{expenseYear}</div>
        <div className="expense-date__day">{expenseDate}</div>
      </div>
      
    );
}

export default ExpenseDate