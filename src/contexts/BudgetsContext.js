import React, { useContext, useState } from 'react'
import { v4 as uuidV4 } from 'uuid'

const BudgetsContext = React.createContext()

export function useBudgets() {
  return useContext(BudgetsContext)
}

export const BudgetsProvider = ({ children }) => {
  const [budgets, setBudgets] = useState([])
  const [expenses, setExpenses] = useState([])

  const getBudgetExpenses = (budgetId) => {
    return expenses.filter((expense) => expense.budgetId === budgetId)
  }

  const addExpense = ({ description, amount, budgetID }) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, { id: uuidV4(), description, amount, budgetID }]
    })
  }

  const addBudget = ({ name, max }) => {
    setBudgets((prevBudgets) => {
      if (prevBudgets.find((budget) => budget.name === name)) return prevBudgets

      return [...prevBudgets, { id: uuidV4(), name, max }]
    })
  }

  const deleteBudget = ({ id }) => {
    setBudgets((prevBudgets) => {
      return prevBudgets.filter((budget) => budget.id !== id)
    })
  }

  const deleteExpense = ({ id }) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.id !== id)
    })
  }

  return (
    <BudgetsContext.Provider
      value={
        (budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense)
      }
    >
      {children}
    </BudgetsContext.Provider>
  )
}
