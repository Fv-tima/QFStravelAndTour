import { styled } from "styled-components";

export const ContactContainer = styled.div`
  margin-top: 4rem;
`;

export const ContactCon = styled.div`
  display: flex;
  align-items: end;
  width: 100%;
  position: relative;
  img {
    max-width: 100%;
  }

  @media (max-width: 850px) {
    position:unset;
    flex-direction:column;
    align-items:center;
}
`;

export const RightCon = styled.div`
  display: flex;
  position: absolute;
  align-items: end;
  bottom: 5%;
  left: 35%;
  img {
    width: 50%;
  }
  @media (max-width: 850px) {
    position:unset;
    flex-direction:column;
    align-items:center;
}

`;

export const FormCon = styled.div`
background:#ffffff;
  form {
    display: flex;
    flex-direction: column;
  }

  input,
  textarea {
    border: none;
    color: #077fde;
    font-family: "Helvetica", san-serif;
    font-size: 16px;
    font-weight: 400;
    border-bottom: 1px solid #077fde;
    padding: 2rem 0;
    margin: 0 6rem;
    outline:none;
  }


  input::placeholder, textarea::placeholder{
    color: #077fde;
  }

  button {
    color: #fff;
    font-family: "Poppins", san-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 15px 0 19px 0;
    background: #077fde;
    border: none;
    margin-top: 6rem;
  }

  div {
    max-width: 420px;
    margin-left: auto;
    text-align: right;
    font-family: "Poppins", san-serif;
    padding: 2.5rem 4.25rem 0 5rem;
    p {
      color: #514d59;
      font-size: 1rem;
      font-weight: 400;
    }
    h2 {
      color: #077fde;
      text-align: right;
      font-size: 1rem;
      font-weight: 600;
    }
  }
`;
