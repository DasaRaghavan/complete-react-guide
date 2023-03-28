import React, { useState } from "react"
import '../css/ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredExpenseTitle, setEnteredExpenseTitle] = useState('')
    const [enteredExpenseAmount, setEnteredExpenseAmount] = useState('')
    const [enteredExpenseDate, setEnteredExpenseDate] = useState('')

    const expenseTitleChangeHandler = (event) => {
        setEnteredExpenseTitle(event.target.value)
    }

    const expenseAmountChangeHandler = (event) => {
        setEnteredExpenseAmount(event.target.value)
    }

    const expenseDateChangeHandler = (event) => {
        setEnteredExpenseDate(event.target.value)
    }

    const cancelHandler = (event) => {
        event.preventDefault()
        props.onCancelExpense(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        // React gets date as UTC always
        let localDate = new Date(enteredExpenseDate) //date is captured in UTC, by React
        
        // console.log(localDate) - you can see that Date is output in UTC with local time offset
        // i.e., browser time
        // we need the actual date entered to be considered as local date 
        // (and not get converted from UTC to local date). Hence the code below.
        
        localDate = new Date(localDate.getUTCFullYear(), localDate.getUTCMonth(), localDate.getUTCDate())
        // console.log(localDate) // shows that the date entered is now considered as local date

        const expenseData = {
            title: enteredExpenseTitle,
            amount: enteredExpenseAmount,
            date: localDate
        }
        props.onSaveExpense(expenseData)  //send object to parent (NewExpense.js)

        // reset the fields to empty
        setEnteredExpenseTitle('')
        setEnteredExpenseAmount('')
        setEnteredExpenseDate('')
        // end reset
        
    }

    return <div>
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Expense Title</label>
                    <input type='text'
                    value={enteredExpenseTitle}
                    onChange={expenseTitleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Expense Amount</label>
                    <input type='number' min='0.01' step='0.01'
                    value={enteredExpenseAmount}
                    onChange={expenseAmountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Expense Date</label>
                    <input type='date' min='2021-01-01' max='2023-12-31'
                    value={enteredExpenseDate}
                    onChange={expenseDateChangeHandler} />
                </div>
            </div>
            <div className='.new-expense__actions'>
                <button type='button' value='Cancel' onClick={cancelHandler}>Cancel</button>
                <button type='submit' value='Add'>Add Expense</button>
            </div>
        </form>
    </div>
}

export default ExpenseForm