# Budget Tracker

This `react` application is a budgets and expenses tracker that is useful on the go whether it be for travel, groceries, or shopping.

Simply create a budget with a max amount, and accordingly add expenses to the budget which will indicate how close you are to your desired maximum.

Budget Tracker is built as a single-page-application using `hooks` and styled with `react-bootstrap` keeping accessibility in mind. A Dark Theme is additionally implemented using `context` for better accessibility.

Deployed on [Netlify](https://www.netlify.com/).

![Landing](/images/travel_grocery_car.png)
![New Budget](/images/new_budget.png)
![Expense Details](/images/expense_details.png)

### Code Snippets

1. `hooks` for `state` and `context` management

```js
const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState()
const [addExpenseModalBudgetId, setAddExpenseModalId] = useState()

const { budgets, getBudgetExpenses } = useBudgets()
const { theme, textColor } = useThemes()
```

2. Creating a custom `hook` to persist values in `localStorage`

```js
const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key)
    if (jsonValue !== null) return JSON.parse(jsonValue)

    if (typeof defaultValue === 'function') return defaultValue
    else return defaultValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
```

3. Dark Theme Implementation

```js
const Layout = ({ children }) => {
  const { theme } = useThemes()

  const background =
    theme === 'dark'
      ? 'body {background-color: #404042; color: gray;}'
      : 'body {background-color: #fff; color: #000;}'

  return (
    <>
      <style>{background}</style>
      {children}
    </>
  )
}
```

### Resources

1. [Web Dev Simplified](https://www.youtube.com/watch?v=yz8x71BiGXg)
2. [react-bootstrap](https://react-bootstrap.github.io/)
3. [Dark Mode](https://blog.maximeheckel.com/posts/switching-off-the-lights-adding-dark-mode-to-your-react-app-with-context-and-hooks-f41da6e07269/)
