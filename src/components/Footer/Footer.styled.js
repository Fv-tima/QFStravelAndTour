import { styled } from "styled-components";

export const FooterCon = styled.div`
  // padding: 3.75rem 7.5rem 5rem;
  padding: 80px 120px;
  background-color: #077fde;
  @media (max-width: 900px) {
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
 display:flex;
 align-items: center;
 .ratings{
  margin-left:16px;
  white-space:nowrap;
  display: flex;
  flex-direction: row;
  height:10px;
padding: 10.2px;
align-items: center;
gap: 8.133px;
border-radius: 2.783px;
background: var(--White, #FFF);
box-shadow: 13.91613px 9.74129px 27.83226px 0px rgba(0, 0, 0, 0.08);
 }
 .ratings p {
  color: var(--Gray, #868686);
font-family: Poppins;
font-size: 10px;
font-style: normal;
font-weight: 600;
line-height: 10.437px; /* 104.371% */
 }
 #image {
  display: flex;


justify-content: center;
align-items: center;
Gap: 0.28px;
 }
  #image img{
  width: 13.742px;
height: 13.742px;
padding: 1.392px;
 }
#new{
   padding:4px;
      border: 1px solid #fff;
      border-radius: 50px;
      background: var(--White, #fff);
      box-sizing: border-box;

}
  img {
    height: 74px;
    width: 187px;
  }
  #depends{
    display:none;
  }
  @media (max-width: 868px) {
    display:flex;
 align-items: center;
  justify-self: center;
 .ratings {
  transform: translateY(-22px);
  margin-left:18px;
  padding: 6.958px;
 }
    #new{
      display:none;
    }
    #depends{
      margin-top:-12%;
      display:initial;
      width: 70px;
      height: 70px;
      padding:4px;
      border: 1px solid #fff;
      border-radius: 50%;
      background: var(--White, #fff);
      box-sizing: border-box;
    }
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
   #two-phones{
      white-space:nowrap;
    }
  }
`;

export const AboutText = styled.p`
  display: flex;
  flex-direction: column;
  max-width: 343px;
  span {
    font-weight: 600;
  }
  #learnfoot{
    max-width: 525px;
  }
  @media (max-width:868px){

    #learnfoot{
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%; 
    }
    #ex{
      display:none;
  }
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
 flex-direction:row;
  align-items: center;
  align-self: stretch;
  color: #ffffff;
  margin-top: 1.5rem;
  font-family: "Poppins", sans-serif;
  font-size:14px;
  #copy{
    display: flex;
       flex-direction:row;
        justify-content: space-between;
        gap:5rem;
        align-items: flex-start;
  }

  @media (max-width: 868px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 20px;
    #copy {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
    #copyright,
    #message {
      text-align: center;
      font-size: 14px;
    }
  }
`;

export const Privacy = styled.div`

  a {
    margin-right: 1rem;
    color: #ffffff;
    border-bottom: 1px solid #fff;
  }
  @media (max-width: 868px) {
    display: flex;
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
