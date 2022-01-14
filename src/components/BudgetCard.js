import { Card, ProgressBar, Stack, Button } from 'react-bootstrap'

import { currencyFormatter } from '../utils'

const BudgetCard = ({
  name,
  amount,
  max,
  grey,
  info,
  onAddExpenseClick,
  hideButtons,
  onViewExpensesClick,
}) => {
  const classNames = []
  const formattedCurrency = currencyFormatter.format(amount)

  if (amount > max) classNames.push('bg-danger', 'bg-opacity-10')
  else if (info) classNames.push('bg-info', 'bg-opacity-10')
  else if (grey) classNames.push('bg-light')

  const displayBudgetWithMax = () => {
    if (max)
      return (
        <span className="text-muted fs-6 ms-1">
          / {currencyFormatter.format(max)}
        </span>
      )
  }

  const displayPillWithMax = () => {
    if (max)
      return (
        <ProgressBar
          className="rounded-pill"
          variant={getProgressBarVariant(amount, max)}
          min={0}
          max={max}
          now={amount}
        />
      )
  }

  const displayStack = () => {
    if (!hideButtons)
      return (
        <Stack direction="horizontal" gap="2" className="mt-4">
          <Button
            variant="outline-primary"
            className="ms-auto"
            onClick={onAddExpenseClick}
          >
            Add Expense
          </Button>
          <Button onClick={onViewExpensesClick} variant="outline-secondary">
            View Expenses
          </Button>
        </Stack>
      )
  }

  return (
    <Card className={classNames.join(' ')}>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
          <div className="me-2">{name}</div>
          <div className="d-flex align-items-baseline">
            {formattedCurrency}
            {displayBudgetWithMax()}
          </div>
        </Card.Title>
        {displayPillWithMax()}
        {displayStack()}
      </Card.Body>
    </Card>
  )
}

const getProgressBarVariant = (amount, max) => {
  const ratio = amount / max
  if (ratio < 0.5) return 'primary'
  if (ratio < 0.75) return 'warning'
  return 'danger'
}

export default BudgetCard
