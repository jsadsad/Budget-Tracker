import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App'
import { BudgetsProvider } from './contexts/BudgetsContext' // making everything here available in our App.
import { ThemesProvider } from './contexts/ThemesContext'

ReactDOM.render(
  <React.StrictMode>
    <BudgetsProvider>
      <ThemesProvider>
        <App />
      </ThemesProvider>
    </BudgetsProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
