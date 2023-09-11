import { styled } from "styled-components";

export const DestinationContainer = styled.div`
  margin-top: 2.5rem;
  h1 {
    margin: 2rem 0;
    font-family: "Poppins", san-serif;
    font-size: 2rem;
    font-weight: 600;
    color: #25282b;
  }
`;

export const DestinationCon = styled.div`
display:flex;
column-gap: 6.25rem;
align-items:center;
justify-content:center;

@media(max-width:868px){
    flex-direction:column;
    align-items:center;
    gap: 2rem;
   `;

export const DestinationImg = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
 
  img {
    max-width: 100%;
  }

  div {
    display: flex;
    gap: 2rem;
    @media(max-width:650px){
        flex-direction:column;
        align-items:center;
        gap: 2rem;
       ;
  }

  .pos{
    position:relative;

    @media(max-width:950px){
      position:unset;
    }
  }
 
`;

export const Eclipse = styled.div`
  max-width: 224px;
  height: 111px;
  padding: 12px;
  align-items: center;
  background: #fff;
  box-shadow: 0px 20px 60px 0px rgba(255, 210, 75, 0.12);
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  position: absolute;
  left: 37rem;
  top: 190rem;

  @media (max-width: 950px) {
    position: unset;
  }

  img {
    max-width: 100%;
    border: 1px solid #fff; 
    border-radius:50px;
  } 

  img:nth-child(1){
    position:relative;
  }
  img:nth-child(2){
    left:45px;
    position:absolute;
    @media (max-width: 950px) {
        left:65px;
    }
  }
  img:nth-child(3){
    left:85px;
    position:absolute;
    @media (max-width: 950px) {
      left:105px;
  }
  }

  div {
    display: flex;
    flex-shrink: 0;
  }

  span {
    color: #35aff4;
    font-weight: 500;
  }

  h2 {
    font-size: 1.125rem;
    font-weight: 450;
  }
`;
