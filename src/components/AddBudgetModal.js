import { useRef } from 'react' // creating references via variables.
import { Form, Modal, Button } from 'react-bootstrap'

import { useBudgets } from '../contexts/BudgetsContext'

const AddBudgetModal = ({ show, handleClose }) => {
  const nameRef = useRef()
  const maxRef = useRef()
  const { addBudget } = useBudgets()

  const handleSubmit = (e) => {
    e.preventDefault()
    addBudget({
      name: nameRef.current.value,
      max: parseFloat(maxRef.current.value),
    })
    handleClose() // close modal whenever we submit
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: '#58987A', fontWeight: '700' }}>
            New Budget
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label style={{ color: '#58987A', fontWeight: '700' }}>
              Name
            </Form.Label>
            <Form.Control
              ref={nameRef}
              type="text"
              placeholder="Groceries, Shopping, Travel..."
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label style={{ color: '#58987A', fontWeight: '700' }}>
              Maximum Spending
            </Form.Label>
            <Form.Control
              ref={maxRef}
              type="number"
              required
              min={0}
              step={0.01}
              placeholder="$"
            />
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

export default AddBudgetModal
