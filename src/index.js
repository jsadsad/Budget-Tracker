import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fontsource/open-sans'

import App from './App'
import { BudgetsProvider } from './contexts/BudgetsContext' // making everything here available in our App.

ReactDOM.render(
  <React.StrictMode>
    <BudgetsProvider>
      <App />
    </BudgetsProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
