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
column-gap: 8rem;

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
 
`;

export const Eclipse = styled.div`
  max-width: 300px;
  height: 100px;
  padding: 12px;
  align-items: center;
  background: #fff;
  box-shadow: 0px 20px 60px 0px rgba(255, 210, 75, 0.12);
  border-radius: 20px;
  padding: 10px;
  cursor:pointer;

  position:relative;

  img {
    max-width: 100%;
  }

  div{
    display:flex;
  }

  span {
    color: #35aff4;
    font-weight: 500;
  }

h2{
  font-weight: 500; 
}
`;
