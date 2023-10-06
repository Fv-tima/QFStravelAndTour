import { styled } from "styled-components";
export const SubscribeCon = styled.div`
  margin: 0;
  padding: 10% 30%;
 
  @media (max-width: 868px) {
    
    ${"" /* background-size:cover; */}
  }
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
    width: 570px;
    height: 56px;
    padding-right: 4px;
    border-radius: 50px;
    

    input {
      width: 100%;
      border: none;
      outline: none;
      background: none;
      font-family: "Poppins",sans-serif;
      font-size: 1rem;
      font-weight: 500;
      padding: 1rem;
      color: #aaa;
    }
    button {
      display: flex;
      height: 48px;
      justify-content: center;
      align-items: center;
      padding: 10px 40px;
      border-radius: 50px;
      color: #fff;
      background: #077FDE;
      font-size: 1rem;
      font-weight: 500;
      font-family: "Poppins", san-serif;
      border:none;
      cursor:pointer;
      
    }
   }

    @media (max-width: 968px) {
      input::placeholder{
      color:#25282B;
      font-size:12px;
      font-weight:400;
    }
    #h1 {
      font-size: 20px;
      text-align: center;
    }
    img{
        display:none;
      }
      div button{
        font-size: 12.9px;
        background: #3685FB;
      display: flex;
      max-width: 102.21px;
  padding: 4.813px;
      justify-content: center;
      align-items: center;
  gap: 4.813px;
      flex-shrink: 0;
    }
      
div, input{
     margin:10px;
     width:100%;
     font-size: .7rem;

     button{
      padding:10px 20px;
    } 
 }
`;
