import { styled } from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  color: #ffffff;
  justify-content: space-between;
  background-color: #0b54c3;
  padding: 3.75rem 7.5rem 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 48px;
    padding: 50px 24px;
    height: 855px;
  }

  a,
  p {
    color: #ffffff;
    font-family: "Poppins", san-serif;
    font-size: 1rem;
    line-height: 2.5rem;
    font-weight: 400;
  }

  #copyright {
    @media (max-width: 768px) {
      display: none;
    }
  }

  h3 {
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 700;
  }

  @media (min-width: 768px) {
    padding: 2.5rem 3.5rem;
  }
`;

export const FooterLogo = styled.div`
  width: 0;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  #about {
    @media (max-width: 768px) {
      display: "block";
    }
  }

  @media (max-width: 768px) {
    height: 885px;
  }
`;

export const AboutText = styled.p`
  width: 327px;
  height: 280px;
  word-wrap: normal;`

export const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
