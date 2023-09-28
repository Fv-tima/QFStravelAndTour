import React from 'react'
import { MainContact } from './Contact.styled'
import {  Nav, Contacts, Faq, Footer } from '../../components'

export default function Contact() {
  return (
    <div className='contact'>
      <Nav/>
    <MainContact >
      <div className='container'>
        <Contacts/>
        <Faq/>
        </div>
    </MainContact>
    <Footer/>
    </div>
  )
}
