import React from "react";
import serviceVector from "../../assets/svg/serVector.svg";
import Instagram from "../../assets/svg/in.svg";
import Fb from "../../assets/svg/Facebook.png";
import Twitter from "../../assets/svg/tw.svg";
import call from "../../assets/svg/call.png";
import email from "../../assets/svg/email.png";
import user from "../../assets/svg/user.png";

import { ContactsContainer, ContactsCon, ContactsDetails, ContactsForm, ContactsInfo, Details, SocialCon } from "./Contacts.styled";

export default function Contacts() {
  return (
    <ContactsContainer>
      <img src={serviceVector} />
      <h1>Get In Touch</h1>
      <ContactsCon>
        <div className="top">
        <h1>Let's Talk</h1>
        <p>
          Do you have questions about our services, or want to book a tour
          package or study abroad program?
        </p>
        </div>
        <ContactsInfo>
          <ContactsForm>
            <h2>
            General Inquiries
            </h2>
            <form>
              <label htmlFor="name">
                <img src={user} />
                <input type="text" placeholder="Name" required />
                <span>*</span>
              </label>
              <label htmlFor="email">
                <img src={email} />
                <input type="email" placeholder="Email address" required />
                <span>*</span>
              </label>
              <label htmlFor="phone number">
                <img src={call} />
                <input type="number" placeholder="Phone number" required />
                <span>*</span>
              </label> 
              <textarea placeholder="Message" cols="30" rows="10"></textarea>
              <button>Let's Talk</button>
            </form>
          </ContactsForm>
          <ContactsDetails>
            <Details>
              <h3>Accra Office Address </h3>
              <p>C02 Manyo Close, Adabraka</p>
              <div>
                <img src={call} />
                <a href="tel:0554791207">0554791207</a>/
                <a href="tel:0533695188"> 0533695188</a>
              </div>
              <div>
                <img src={email} />
                <a href="mailto:jason@qfstravelandtourgh.com">jason@qfstravelandtourgh.com</a>
              </div>
            </Details>
            <Details>
              <h3>Sunyani Office Address </h3>
              <p>Adjacent Fidelity Bank, off VRA Road</p>
              <div>
                <img src={call} />
                <a href="tel:0244967595">0244967595</a>
              </div>
              <div>
                <img src={email} />
                <a href="mailto:jason@qfstravelandtourgh.com">jason@qfstravelandtourgh.com</a>
              </div>
            </Details>
            <Details>
              <h3>Social</h3>
              <SocialCon>
                
                <img src={Fb} />
                <img src={Instagram} />
                <img src={Twitter} />
              </SocialCon>
            </Details>
          </ContactsDetails>
        </ContactsInfo>
      </ContactsCon>
    </ContactsContainer>
  );
}
