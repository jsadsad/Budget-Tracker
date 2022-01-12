import { Card } from 'react-bootstrap'
import { currencyFormatter } from '../utils'

const BudgetCard = ({ name, amount, max }) => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>
            <div>{name}</div>
            <div>
              {currencyFormatter.format(amount)} /{' '}
              {currencyFormatter.format(max)}
            </div>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  )
}

export default BudgetCard
