import React from 'react'
import { MainContact } from './Contact.styled'
import {  Contacts, Faq } from '../../components'

export default function Contact() {
  return (
    <MainContact >
      <div className='container'>
        <Contacts/>
        <Faq/>
        </div>
    </MainContact>
  )
}
