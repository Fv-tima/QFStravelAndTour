import { styled } from "styled-components";

export const FooterCon = styled.div`
  padding: 3.75rem 7.5rem 5rem;
  background-color: #077fde;
  @media (max-width: 868px) {
    padding: 40px 16px;
    background-color: #077fde;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  hr {
    display: none;
  }
  @media (max-width: 868px) {
    hr {
      display: inline;
      position: relative;
      bottom: 150px;
      width: 100%;
      color: #fff;
    }
  }
`;

export const FooterInnerCon = styled.div`
  display: flex;
  color: #ffffff;
  column-gap: 128px;
  align-items: start;
  border-bottom: 1px solid #fff;

  .footer {
    display: flex;
    column-gap: 40px;
  }

  @media (max-width: 868px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 48px;
    min-height: 955px;

    .footer {
      flex-direction: column;
    }
  }

  a,
  p {
    color: #ffffff;
    font-family: "Poppins", san-serif;
    font-size: 0.9rem;
    line-height: 1.5rem;
    font-weight: 400;
  }

  h3 {
    font-family: "Poppins", san-serif;
    font-size: 1.1rem;
    line-height: 1.75rem;
    font-weight: 700;
  }
`;

export const FooterLogo = styled.div`
  border-radius: 70px;
  background: #fff;
  width: 216px;
  height: 77px;
  padding: 0px 13px 0px 16px;

  img {
    height: 74px;
    width: 187px;
  }
  #depends{
    visibility: hidden;
  }
   
    @media (max-width: 868px) {
      visibility: hidden;
      position:relative;
     #depends{
      position: absolute;
     bottom:20px;
      right:120px;
      visibility: visible;
      }
      img{
        width:50%;
        height:100%;
      }

`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 164px;

  #email {
    max-width: 500px;
  }
  @media (max-width: 868px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    h3 {
      margin-block: -2px;
    }
  }
`;

export const AboutText = styled.p`
  display: flex;
  flex-direction: column;
  max-width: 525px;
  span {
    font-weight: 600;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 30px;
  }
  a {
    display: flex;
    gap: 12px;
  }
  @media (max-width: 868px) {
    span {
      font-weight: bold;
    }
  }
`;

export const Copy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  color: #ffffff;
  margin-top: 2rem;
  font-family: "Poppins", sans-serif;

  @media (max-width: 868px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 40px;
    #copy {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    #copyright,
    #message {
      text-align: center;
      font-size: 14px;
    }
  }
`;

export const Privacy = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    margin-right: 1rem;
    color: #ffffff;
    border-bottom: 1px solid #fff;
  }
  @media (max-width: 868px) {
    justify-content: center;
    align-items: center;

    a {
      justify-content: center;
    }
    a:nth-child(3) {
      display: none;
    }
  }
`;
