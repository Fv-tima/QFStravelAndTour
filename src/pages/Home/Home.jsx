import React from 'react'
import { Nav, Footer, Hero, Services, AboutSection, SubscribeSec, Feedback } from '../../components'

export default function Home() {
  return (
    <div>
    <div className="container">
      <Nav/>
      <Hero/>
      <Services/>
      <AboutSection/>
      <Feedback/>
      </div>
      <SubscribeSec/>
      </div>
  )
}
