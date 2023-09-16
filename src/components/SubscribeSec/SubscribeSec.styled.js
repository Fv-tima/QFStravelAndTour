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

  img{
margin-top:1.5rem;
    margin-left:auto;
    cursor:pointer;
  }

  h1 {
    color: #fff;
    text-align: center;
    font-family: "Poppins", san-serif;
    font-size: 2.5rem;
    font-weight: 600;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #aaa;
    background: #fff;
    max-width: 570px;
    height: 56px;
    padding-right: 4px;
    border-radius: 50px;
    

    input {
      width: 570px;
      border: none;
      outline: none;
      background: none;
      font-family: Poppins;
      font-size: 1rem;
      font-weight: 500;
      padding: 1rem;
      color: #aaa;
    }
    button {
      display: flex;
      width: 158px;
      height: 48px;
      justify-content: center;
      align-items: center;
      padding: 10px;
      border-radius: 50px;
      color: #fff;
      background: #3685fb;
      font-size: 1rem;
      font-weight: 500;
      font-family: "Poppins", san-serif;
      border:none;
      cursor:pointer;
      flex-shrink: 0;
    }
  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
    input{
      padding: 1rem;
      width:auto;
    }
    button{
      width:auto;
    }
  }
`;
