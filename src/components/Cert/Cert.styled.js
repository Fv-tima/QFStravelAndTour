import styled from "styled-components";

export const CertContainer = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
  gap: 24px;
  padding-bottom: 40px;
  img {
    height: 150px;
  }

  @media (max-width: 768px) {
    align-items:center;
    justify-content: center;
  }
`;

export const Cert = styled.div`
  margin-top: 3.5rem;
  h1 {
    text-align: center;
    font-family: "Poppins", san-serif;
    font-size: 2rem;
    font-weight: 600;
    line-height: 3rem;
    color: #514d59;
  }
  span {
    color: #514d59;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.7rem;
      line-height: 3.5rem;
    }
  }
`;
