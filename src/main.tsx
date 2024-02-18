import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ThemeProvider from './context/ThemeProvider'

import './index.css'
import './i18n'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <Suspense fallback="loading">
        <App />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
)
