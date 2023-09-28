import React from "react";
import serviceVector from "../../assets/svg/serVector.svg";
import service1 from "../../assets/images/service1.png";
import service2 from "../../assets/images/service2.png";
import service3 from "../../assets/images/service3.png";
import service4 from "../../assets/images/service4.png";
import { Service, ServiceContainer } from "./Services.styled";

export default function Services() {
  return (
    <Service> 
      <img src={serviceVector} />
      <h1>Our Services</h1>
      <ServiceContainer> 
      <div> 
          <img src={ service1 } />
          <h2>Explore Our Website</h2>  
        <p>
          At QFS Travel and Tours, we offer a wide range of services that cater
          to all types of travelers. From families with young children to solo
          adventurers, we have something for everyone. Here are some of the
          services we offer:
        </p>
      </div>
      <div> 
        <img src={service2} />
        <h2>Visa Assistance</h2>
        <p>
          We provide assistance in the form of two areas
          <li>
            Visa assistance for those who want to travel outside
          </li>
          <li>
            Entry visas and work permits for expats who would be visiting Ghana
          </li>
        </p>
      </div>
      <div>
        <img src={service3} />
        <h2>Tour Packages</h2>
        <p>
          We offer tour packages to destinations all over the world, including
          Canada, UK, Australia, and USA. Our packages are designed to cater for
          all types of travelers and budgets, and include everything from
          flights and accommodations to meals and activities.
        </p>
      </div>
      <div>
        <img src={service4} />
        <h2>Study Abroad Programs</h2>
        <p>
          Our study abroad programs are designed to provide students with a
          unique and immense educational experience. We offer a variety of
          programs, including academic programs, language courses, and
          internships, in some of the world's most prestigious universities.
        </p>
      </div>
    </ServiceContainer>
    </Service>
  );
}
