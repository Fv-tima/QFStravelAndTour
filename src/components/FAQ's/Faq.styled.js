import styled from "styled-components";

export const FaQBucket = styled.div`
  margin-top: 2.5rem;
  padding-block:3.4rem;
  text-align:center;
  
  h1{
  margin:2rem 0;
  font-family: "Poppins", san-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #514D59;
  text-align:center;
  line-height:62px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  }
  
 
`;
export const MotherVolume = styled.div`
  margin-top: 1.3rem;
  display: grid;

  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  @media (max-width: 768px) {
    grid-template-columns:auto;
  }
`;
