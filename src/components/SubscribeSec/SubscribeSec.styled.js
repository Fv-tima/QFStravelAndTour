import { styled } from "styled-components";
export const SubscribeCon = styled.div`
  margin: 0;
  padding: 147px 387px;
`;

export const SubscribeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2.5rem auto 0;

  h1 {
    color: #fff;
    text-align: center;
    font-family: Poppins;
    font-size: 2.5rem;
    font-weight: 600;
  }

  div {
    display: flex;
    justify-content: space-between;
    border: 1px solid #aaa;
    background: #fff;
    max-width: 570px;

    input {
     width: auto;
      border: none;
      outline: none;
      background: none;
      color: #aaa;
      font-family: Poppins;
      font-size: 1rem;
      font-weight: 500;
      padding: 2rem;
    }
    button {
      color: #fff;
      font-family: Poppins;
      font-size: 1rem;
      font-weight: 500;
      background: #3685fb;
      padding: 10px;
      border:none;
    }
  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
    input{
      padding: 1rem;
    }
  }
`;
