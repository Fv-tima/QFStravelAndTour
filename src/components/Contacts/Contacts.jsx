import React from "react";
import {
  ContactCon,
  ContactContainer,
  FormCon,
  RightCon
} from "./Contacts.styled";

import serviceVector from "../../assets/svg/serVector.svg";
import contact from "../../assets/images/contact.png";
import get from "../../assets/images/get.png";
import talk from "../../assets/images/talk.png";

export default function Contacts() {
  return (
    <ContactContainer>
      <img src={serviceVector} />
      <h1>Contact Us</h1>
      <ContactCon>
        <img src={talk} />
        <RightCon>
        <img src={get} />
        <FormCon>
            <div className="inquiries">
              <p>
                Do you have questions about our services, or want to book a tour
                package or study abroad program?
              </p>
              <h2>General inquiries</h2>
            </div>
            <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email address" required />
            <textarea placeholder="Message" rows="4"></textarea>
            <button>Let's talk!</button>
          </form>
        </FormCon>
        </RightCon>
      </ContactCon>
    </ContactContainer>
  );
}
