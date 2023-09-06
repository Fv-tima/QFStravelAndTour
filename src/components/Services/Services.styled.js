import styled from "styled-components";

export const Service = styled.div`
  margin-top: 2.5rem;
  h1{
    margin:2rem 0;
    font-family: "Poppins", san-serif;
    font-size: 2rem;
    font-weight: 600;
    color: #25282b;
  }
`;

export const ServiceContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 2rem;
  @media (max-width: 768px) {
    grid-template-columns:auto;
  }
`;
export const ServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap:1rem;
  border-radius: 10px;
  background: #fff)
  box-shadow: 0px 20px 60px 0px rgba(255, 210, 75, 0.12);
  padding: 28px 45px;
  img {
    width: 20%;
  }

  h2 {
    font-family: "Poppins", san-serif;
    font-size: 1.5rem;
    font-weight: 600;
    color: #25282b;
  }

  p {
    font-family: "Poppins", san-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: #25282b;
  }

  @media (max-width: 768px) {
    img{
   margin:0 auto;
    }
  }
`;
