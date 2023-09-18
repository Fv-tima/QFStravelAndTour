import { styled } from "styled-components";
export const SubscribeCon = styled.div`
  margin: 0;
  padding: 147px 387px;
  @media (max-width:868px){
  background: linear-gradient(180deg, rgba(12, 31, 38, 0.00) -16.11%, #0C1F26 114.32%);
${ '' /* background-size:cover; */ }
  }
`;

export const SubscribeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2.5rem auto 0;

<<<<<<< HEAD

=======
>>>>>>> 94a5d86e07e378b7230d38cb572f9ecf8252637b
  img{
  margin-top:1.5rem;
    margin-left:auto;
    cursor:pointer;
  } 

  h1 {
    color: #fff;
    text-align: center;
    font-family: "Poppins", san-serif;
    font-size: 2.5rem ;
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
      max-width: 570px;
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
   @media (max-width: 768px) {
    #h1 {
     font-size: 1.4rem;
   }
  
<<<<<<< HEAD
  }

    @media (max-width: 768px) {


    #h1 {
      font-size: 20px;
      text-align: center;
    }
    img{
        display:none;
      }
    div{
      display: flex;
      justify-content: center;
      gap:1rem;
      
      input{
        width: 210.656px;
        height: 40.546px;
      flex-shrink: 0;
      }
      button{
        background: #3685FB;
      display: flex;
      width: 102.21px;
      
  padding: 4.813px;
      justify-content: center;
      align-items: center;
  gap: 4.813px;
      flex-shrink: 0;
    }
      }
      
    
  }
=======
div, input{
     margin:10px;
     width:100%;
     font-size: .7rem;

     button{
      padding:10px 20px;
    }
   }  


 }
>>>>>>> 94a5d86e07e378b7230d38cb572f9ecf8252637b
`;
