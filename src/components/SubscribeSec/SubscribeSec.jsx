import React from 'react'
import { SubscribeContainer, SubscribeCon } from './SubscribeSec.styled'

export default function SubscribeSec() {
  return (
    <SubscribeCon id='subscribe'>
   <SubscribeContainer>
    <h1>Enter your e-mail address and get notified of exclusive offers</h1>
    <div>
        <input type="email" placeholder='Your e-mail address' />
        <button>Subscribe</button>
    </div>
   </SubscribeContainer>
   </SubscribeCon>
  )
}
