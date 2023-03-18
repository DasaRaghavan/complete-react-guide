import React from 'react'
import ExpenseForm from './ExpenseForm.js'
import '../css/NewExpense.css'

const NewExpense = (props) => {
    const addExpenseHandler = (expenseData) => {
        const newExpenseData = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onNewExpense(newExpenseData) //send object to parent (App.js)
    }

    return <div className='new-expense'>
        <ExpenseForm onSaveExpense={addExpenseHandler} />
    </div>
}

export default NewExpense
