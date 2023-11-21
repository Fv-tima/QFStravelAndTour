import styled from "styled-components";

export const CertContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  padding-bottom: 40px;

  img {
    height: 100px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }
`;

export const Cert = styled.div`
  margin-top: 3.5rem;

  h1 {
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 3rem;
    font-weight: 600;
    line-height: 3rem;
    color: #514d59;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.7rem;
      line-height: 3.5rem;
    }
  }
`;
