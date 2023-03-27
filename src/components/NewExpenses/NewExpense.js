import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm.js'
import '../css/NewExpense.css'

const NewExpense = (props) => {
    const [addNewExpense, setAddNewExpense] = useState(false)

    const addNewExpenseButtonHandler = () => {
        setAddNewExpense(true)
    }

    // this is called using the props within the child ExpenseForm.js
    const addExpenseHandler = (expenseData) => {
        const newExpenseData = {
            ...expenseData,
            id: Math.random().toString()
        }
        // onNewExpense is a prop defined in the parent App.js
        props.onNewExpense(newExpenseData) //props is used the send object to parent (App.js)
    }

    const cancelExpenseHandler = (val) => {
        if (val === 'Cancel') {
            setAddNewExpense(false)
        }
        
    }
    if (!addNewExpense) {
        return <div className='new-expense'>
            <button onClick={addNewExpenseButtonHandler}>Add New Expense</button>
        </div>
    }    
    
    if (addNewExpense) {
        return <div className='new-expense'>
            <ExpenseForm onSaveExpense={addExpenseHandler} onCancelExpense={cancelExpenseHandler} />
        </div>  
    }
    
}

export default NewExpense
