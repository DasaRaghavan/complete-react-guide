import React from 'react'
import ExpenseForm from './ExpenseForm.js'
import '../css/NewExpense.css'

const NewExpense = (props) => {
    // this is called using the props within the child ExpenseForm.js
    const addExpenseHandler = (expenseData) => {
        const newExpenseData = {
            ...expenseData,
            id: Math.random().toString()
        }
        // onNewExpense is a prop defined in the parent App.js
        props.onNewExpense(newExpenseData) //props is used the send object to parent (App.js)
    }

    return <div className='new-expense'>
        <ExpenseForm onSaveExpense={addExpenseHandler} />
    </div>
}

export default NewExpense
