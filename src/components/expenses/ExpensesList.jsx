import ExpensesItem from './ExpensesItem'
import './ExpensesList.css'
import React from 'react'
import Expenses from './Expenses'

const ExpensesList = (props) => {
  if (props.filteredExpenses.length === 0 && props.filteredYear !== 'All') {
    return <h2 className='expenses-list__fallback'>No Expenses Found</h2>
  }
  if (props.filteredExpenses.length > 0 ) {
    return <ul className='expenses-list'>
      {props.filteredExpenses.map((expense) => (
        <ExpensesItem 
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />
      ))}
    </ul>
  }
  if (props.filteredExpenses.length === 'All') {
    return <ul className='expenses-list'>
      {props.filteredExpenses.map((expense) =>
       <ExpensesItem
       key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />
      )}
 
    </ul>
  }
}

export default ExpensesList