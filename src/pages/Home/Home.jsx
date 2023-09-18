import React from 'react'
import { Nav, Hero, Services, AboutSection, SubscribeSec, Feedback, Footer } from '../../components'

export default function Home() {
  return (
    <div>
      <Nav/>
    <div className="container">
      <Hero/>
      <Services/>
      <AboutSection/>
      <Feedback/>
      </div>
      <SubscribeSec/>
      <Footer/>
      </div>
  )
}
