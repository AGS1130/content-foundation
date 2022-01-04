import React from 'react'

import Header from './Header'
import Footer from './Footer'

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <div className='flex flex-col min-h-screen overflow-hidden'>
    <Header />
    <main className='flex-grow'>{children}</main>
    <Footer />
  </div>
)

export default MainLayout
