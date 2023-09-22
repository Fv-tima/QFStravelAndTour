import styled from "styled-components";

export const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap:auto;
  margin-top:2.5rem;
  line-height:auto;
  

  @media (max-width: 968px) {
    margin-top:-0.2em;
    flex-direction: column;
    gap:1rem;

  }

  img{
    max-width:100%;
  }
`;

export const SectionContent = styled.div`

  h1 {
    margin-top:-0.5rem;
    display:flex;
    flex-direction:column;
    font-family: "Poppins", sans-serif;
  width:auto;
  height: 288px;
    color: #077fde;
    font-size:64px;
font-style: normal;
font-weight: 700;
 line-height:normal;
  }

  img{
    width: 252.469px;
height: 24px;
flex-shrink: 0;
  }

  p {
    margin-top:-1.7rem;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 400;
    color:#25282B;
    width:auto;
    height: 81px;
    line-height:27px;
  }
  @media (max-width: 968px) {
    img{
      width:40%;
    }
    h1 {
      font-size: 32px;
      line-height: normal;
      height: auto;
    }
    p {
      margin-top:unset;
      font-size: 1rem;
      line-height: 1.5rem;
    }
    width: 100%;
  }
`;

export const SectionImg = styled.img`
width:100%;`
