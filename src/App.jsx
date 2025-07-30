import { useState } from 'react'
import './index.css'
import AppRoutes from './routes/page'
import AppLayout from './layouts/layout'
import AppProvider from './provider/page'


function App() {
  return (
    <>
      <AppProvider>
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      </AppProvider>
    </>
  )
}

export default App
