import BudgetCard from './BudgetCard'
import { useBudgets } from '../contexts/BudgetsContext'
import { useThemes } from '../contexts/ThemesContext'

const TotalBudgetCard = () => {
  const { expenses, budgets } = useBudgets()
  const { textColor } = useThemes()

  const amount = expenses.reduce((total, expense) => total + expense.amount, 0)
  const max = budgets.reduce((total, budget) => total + budget.max, 0)

  if (max === 0) return null

  return (
    <BudgetCard
      name="Total"
      textColor={textColor}
      amount={amount}
      max={max}
      info
      hideButtons
    />
  )
}

export default TotalBudgetCard
