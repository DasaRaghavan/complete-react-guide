import React from "react"
import ExpenseItem from "./ExpenseItem"
import "../css/ExpensesList.css"

const ExpensesList = (props) => {

    if (props.items.length === 0) {
      return <div className='expenses-list__fallback'>Found No Expenses</div>
    }
    return (
        <ul className='expenses-list'>
            {props.items.map((expense) => (
                <ExpenseItem 
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
          />))}
        </ul>
      )


}
export default ExpensesList