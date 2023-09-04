import styled from "styled-components";

export const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap:2.75rem;
  margin-top:2.5rem;


  @media (max-width: 868px) {
    flex-direction: column;
    Gap:1rem;
    padding: 2rem 2rem;
  }

  img{
    max-width:100%;
  }
`;

export const SectionContent = styled.div`

  h1 {
    display:flex;
    flex-direction:column;
    font-family: "Poppins", san-serif;
    font-size: 4rem;
    font-weight: 700;
    color: #077fde;
  }

  img{
    width:40%;
  }

  p {
    font-family: "Poppins", san-serif;
    font-size: 1.25rem;
    font-weight: 400;
    color:#25282B;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
    width: 100%;
  }
`;

export const SectionImg = styled.img`
width:100%;`
