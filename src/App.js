import { useState } from 'react'
import { Button, Stack } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'

import AddBudgetModal from './components/AddBudgetModal'
import AddExpenseModal from './components/AddExpenseModal'
import ViewExpensesModal from './components/ViewExpensesModal'

import BudgetCard from './components/BudgetCard'
import TotalBudgetCard from './components/TotalBudgetCard'
import UncategorizedBudgetCard from './components/UncategorizedBudgetCard'
import Layout from './components/Layout'
import ThemeSwitcher from './components/ThemeSwitcher'
import Footer from './components/Footer'

import { useBudgets } from './contexts/BudgetsContext'
import { useThemes } from './contexts/ThemesContext'

import { UNCATEGORIZED_BUDGET_ID } from './contexts/BudgetsContext'

const App = () => {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
  const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState()
  const [addExpenseModalBudgetId, setAddExpenseModalId] = useState()

  const { budgets, getBudgetExpenses } = useBudgets() // gettign the budgets from the context.
  const { theme } = useThemes()

  const openAddExpenseModal = (budgetId) => {
    setShowAddExpenseModal(true)
    setAddExpenseModalId(budgetId)
  }

  const displayBudgetCards = () => {
    return budgets.map((budget) => {
      const amount = getBudgetExpenses(budget.id).reduce(
        (total, expense) => total + expense.amount,
        0
      )
      return (
        <BudgetCard
          key={budget.id}
          name={budget.name}
          amount={amount}
          max={budget.max}
          theme={theme}
          onAddExpenseClick={() => openAddExpenseModal(budget.id)}
          onViewExpensesClick={() => setViewExpensesModalBudgetId(budget.id)}
        />
      )
    })
  }

  return (
    <>
      <Layout>
        <Container className="my-4">
          <Stack direction="horizontal" gap="2" className="mb-4">
            <h1
              className="me-auto"
              style={{ fontStyle: 'oblique', cursor: 'default' }}
            >
              Budget Tracker
            </h1>
            <Button
              variant="success"
              style={{ boxShadow: 'none' }}
              onClick={() => setShowAddBudgetModal(true)}
            >
              Create Budget
            </Button>
            <Button
              variant="outline-primary"
              style={{ boxShadow: 'none' }}
              onClick={openAddExpenseModal}
            >
              Add Expense
            </Button>
            <ThemeSwitcher />
          </Stack>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill,minmax(300px, 1fr))',
              gap: '1rem',
              alignItems: 'flex-start',
            }}
          >
            <TotalBudgetCard />
            <UncategorizedBudgetCard
              onAddExpenseClick={openAddExpenseModal}
              onViewExpensesClick={() =>
                setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)
              }
            />
            {displayBudgetCards()}
          </div>
        </Container>
        <Footer />
        <AddBudgetModal
          show={showAddBudgetModal}
          handleClose={() => setShowAddBudgetModal(false)}
        />
        <AddExpenseModal
          show={showAddExpenseModal}
          defaultBudgetId={addExpenseModalBudgetId}
          handleClose={() => setShowAddExpenseModal(false)}
        />
        <ViewExpensesModal
          budgetId={viewExpensesModalBudgetId}
          handleClose={() => setViewExpensesModalBudgetId()}
        />
      </Layout>
    </>
  )
}

export default App
