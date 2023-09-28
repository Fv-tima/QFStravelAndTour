import React from "react";
import { HeroSection, SectionContent } from "./Hero.styled";
import HeroImg from "../../assets/images/hero.png"
import heroVector from "../../assets/images/heroVector.png"

export default function Hero() {
  return (  
    <HeroSection>  
      <SectionContent> 
        <h1 id='desk'>
          Discover your favourite places 
        <img id="one" src={heroVector}/> 
         with us  
        </h1>   
        <h1 id="mob"> 
          Discover your favourite places with us
          <img id="two" src={ heroVector } />  
        </h1> 
        <p> 
        Your journey begins here with our curated travel experiences. Discover new horizons, create lasting memories, and explore the world with our expertly crafted itineraries.
        </p>
        <button>Apply for Visa</button>
      </SectionContent>
      <img src={HeroImg} alt="Hero image" />
    </HeroSection>
  );
}

