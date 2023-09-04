import { styled } from "styled-components";

export const FooterCon = styled.div`
padding: 3.75rem 7.5rem 5rem;
background-color: #0b54c3;
@media(max-width:868px){
  padding: 50px 24px;
}
`

export const FooterContainer = styled.div`
  display: flex;
  color: #ffffff;
  justify-content: space-between;
  
  border-bottom:1px solid #fff;

  @media (max-width: 868px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 48px;
    min-height: 955px;
  }

  a,
  p {
    color: #ffffff;
    font-family: "Poppins", san-serif;
    font-size: 1rem;
    line-height: 2.5rem;
    font-weight: 400;
  }

  }

  h3 {
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 700;
  }
`;

export const FooterLogo = styled.div`
  img{
    width:100%;
    margin-top:3rem;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width:164px;
  }
`;

export const AboutText = styled.p`
display: flex;
flex-direction: column;
 max-width: 387px;
  span{
    font-weight:600;
  }`

export const SocialContainer = styled.div`
  display: flex;
  flex-direction:column;

 a{
  display:flex;
  gap:.4rem;
 }
`;

export const Copy = styled.div`
display:flex;
justify-content: space-between;
align-items:center;
color: #ffffff;
margin-top:2rem;

@media (max-width: 868px) {
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}`

export const Privacy = styled.div`
display:flex;
justify-content: space-between;

a{
  padding-right:1rem;
  color: #ffffff;
  border-bottom: 1px solid #fff;
}`