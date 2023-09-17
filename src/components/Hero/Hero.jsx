import React from "react";
import { HeroSection, SectionContent, SectionImg } from "./Hero.styled";
import HeroImg from "../../assets/images/hero.png"
import heroVector from "../../assets/images/heroVector.png"

export default function Hero() {
  return (
    <HeroSection>
      <SectionContent>
        <h1>
        Discover your favourite places
        <img src={heroVector}/>
        with us  
        </h1>
        <p>
        Your journey begins here with our curated travel experiences. Discover new horizons, create lasting memories, and explore the world with our expertly crafted itineraries.
        </p>
      </SectionContent>
      <img src={HeroImg} alt="Hero image" />
    </HeroSection>
  );
}

