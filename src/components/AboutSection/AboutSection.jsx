import React from "react";
import { AboutContainer, Abouts, AboutContent, InnerContent } from "./AboutSection.styled";
import serviceVector from "../../assets/svg/serVector.svg";
import images from "../../assets/images/Images.png";
import btn from "../../assets/images/btn.png";

//great job
export default function AboutSection() {
  return (
    <Abouts>
      <img src={serviceVector} />
      <h1>About QFS Travel and Tours</h1>
      <AboutContainer>
        <img src={images} />
        <AboutContent>
          <h1>At QFS Travel & Tours</h1>
          <InnerContent>
            <img src={btn} />
            <p>
              we are passionate about providing our clients with the best
              possible travel experience. With over 10 years of experience in
              the travel industry. 
              <p>we have established ourselves as a leading
              provider of tour packages and study abroad programs.
              </p>
            </p>
          </InnerContent>
          <button>Read More</button>
        </AboutContent>
      </AboutContainer>
    </Abouts>
  );
}
