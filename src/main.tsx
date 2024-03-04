import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ThemeProvider from './context/ThemeProvider'

import './index.css'
import './i18n'
import Loader from './components/Loader'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </ThemeProvider>
)
