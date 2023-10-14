import React from 'react'
import { MainHome } from './Home.styled'
import { Nav, Hero, Services, AboutSection, SubscribeSec, Feedback, Footer } from '../../components'

export default function Home () {
  return (
    <div>
      <Nav />
      <MainHome>
        <div className="container">
          <Hero />
          <Services />
          <AboutSection />
          <Feedback />
        </div>
        <SubscribeSec />
        </MainHome>
      <Footer />
    </div>
  )
}
