import React from 'react'
import { Hero, Services, AboutSection, SubscribeSec, Feedback } from '../../components'

export default function Home() {
  return (
    <div>
    <div className="container">
      <Hero/>
      <Services/>
      <AboutSection/>
      <Feedback/>
      </div>
      <SubscribeSec/>
      </div>
  )
}
