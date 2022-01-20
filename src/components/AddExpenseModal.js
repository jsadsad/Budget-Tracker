import { useRef } from 'react' // creating references via variables.
import { Form, Modal, Button } from 'react-bootstrap'

import { useBudgets } from '../contexts/BudgetsContext'
import { UNCATEGORIZED_BUDGET_ID } from '../contexts/BudgetsContext'

const AddExpenseModal = ({ show, handleClose, defaultBudgetId }) => {
  const descriptionRef = useRef()
  const amountRef = useRef()
  const budgetIdRef = useRef()
  const { addExpense, budgets } = useBudgets()

  const handleSubmit = (e) => {
    e.preventDefault()
    addExpense({
      description: descriptionRef.current.value,
      amount: parseFloat(amountRef.current.value),
      budgetId: budgetIdRef.current.value,
    })
    handleClose() // close modal whenever we submit
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: '#58987A', fontWeight: '700' }}>
            New Expense
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label style={{ color: '#58987A', fontWeight: '700' }}>
              Description
            </Form.Label>
            <Form.Control ref={descriptionRef} type="text" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Amount">
            <Form.Label style={{ color: '#58987A', fontWeight: '700' }}>
              Amount
            </Form.Label>
            <Form.Control
              ref={amountRef}
              type="number"
              required
              min={0}
              step={0.01}
              placeholder="$"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="budgetId">
            <Form.Label style={{ color: '#58987A', fontWeight: '700' }}>
              Budget
            </Form.Label>
            <Form.Select defaultValue={defaultBudgetId} ref={budgetIdRef}>
              <option id={UNCATEGORIZED_BUDGET_ID}>Uncategorized</option>
              {budgets.map((budget) => (
                <option key={budget.id} value={budget.id}>
                  {budget.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              Add
            </Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  )
}

export default AddExpenseModal
