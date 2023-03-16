import React from "react"
import '../css/ExpenseForm.css'

const ExpenseForm = () => {
    return <div>
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' />
                </div>
                <div className='new-expense__control'>
                    <label>Expense Amount</label>
                    <input type='number' min='0.01' step='0.01'/>
                </div>
                <div className='new-expense__control'>
                    <label>Expense Date</label>
                    <input type='date' min='2021-01-01' max='2023-12-31' />
                </div>
            </div>

        </form>
    </div>
}

export default ExpenseForm