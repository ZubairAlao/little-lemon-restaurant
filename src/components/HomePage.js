import React from 'react'
import CallToAction from './CallToAction'
import Specials from './Specials'
import CustomerSay from './CustomerSay'
import Chicago from './Chicago'


function HomePage() {
  return (
    <main className='main-content'>
        <CallToAction />
        <Specials />
        <CustomerSay />
        <Chicago />
    </main>
  )
}

export default HomePage;