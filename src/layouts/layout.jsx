import React from 'react'
import Header from '../components/globalComponents/header/header'
import Footer from '../components/globalComponents/footer/footer'

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default AppLayout
