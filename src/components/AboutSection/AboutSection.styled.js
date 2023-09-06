import styled from "styled-components";

export const Abouts = styled.div`
  margin-top: 2.5rem;
  h1 {
    margin: 2rem 0;
    font-family: "Poppins", san-serif;
    font-size: 2rem;
    font-weight: 600;
    color: #25282b;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8rem;

  img {
    max-width: 100%;
  }
  @media(max-width:1068px){
    flex-direction:column;
   

    img {
      max-width: 100%;
      margin:0 auto;
    }
  }
`;

export const AboutContent = styled.div`
  h1 {
    font-family: "Poppins", san-serif;
    font-size: 3.5rem;
    font-weight: 700;
    color: #25282b;
  }

  p {
    font-family: "Poppins", san-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: #25282b;
  }

  button {
    border-radius: 10px;
    background: #077fde;
    padding: 15px 32px;
    color: #fff;
    text-align: center;
    font-family: "Poppins", san-serif;
    font-size: 1rem;
    font-weight: 500;
    border:none;
    cursor:pointer;
  }
img{
  cursor:pointer;
}

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const InnerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 3rem;
`;

