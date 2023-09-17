import { styled } from "styled-components";

export const FooterCon = styled.div`
  padding: 3.75rem 7.5rem 5rem;
  background-color: #077FDE;
  @media (max-width: 868px) {
    padding: 50px 24px;
    background-color: #077FDE;
  }
`;

export const FooterContainer = styled.div`
display:flex;
flex-direction:column;

`; 

export const FooterInnerCon = styled.div`
  display: flex;
  color: #ffffff;
  column-gap:128px;
  align-items:start;
  border-bottom:1px solid #fff;

  .footer{
    display:flex;
    column-gap:40px;
  }

  @media (max-width: 868px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 48px;
    min-height: 955px;

    .footer{
      flex-direction:column;
    }
  }

  a,
  p {
    color: #ffffff;
    font-family: "Poppins", san-serif;
    font-size: 0.9rem;
    line-height: 2.5rem;
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
background:#FFF;
width:216px;
height:77px;
padding:0px 13px 0px 16px;

img{
  height:74px;
width:187px;
}
@media (max-width: 868px) {
img{
  width:50%;
}
}
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width:164px;

  p{
    line-height:1.5rem;
  }

  #email{
    max-width:500px;
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
img{
  width:30px;
}
  a {
    display: flex;
    gap: 0.4rem;
  }
`;

export const Copy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self:stretch;
  color: #ffffff;
  margin-top: 2rem;
  font-family:"Poppins",sans-serif;

  @media (max-width: 868px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
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
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    a {
      padding-top: 10px;
    }
  }
`;
