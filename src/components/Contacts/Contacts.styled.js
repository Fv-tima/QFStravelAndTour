import { styled } from "styled-components";

export const ContactsContainer = styled.div`
  margin-top: 2.5rem;
  h1 {
    font-family: "Poppins", san-serif;
    font-size: 2rem;
    font-weight: 600;
    color: #25282b;
  }
  
`;

export const ContactsCon = styled.div`

  .top {
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align: center;
  
  
  h1 {
    margin-top:0;
    font-family: "Poppins", san-serif;
    font-size: 3.375rem;
    font-weight: 800;
    color: #514d59;
  }

  p {
    display: flex;
    flex-direction:column;
    align-items:center;
    color: #514d59;
    text-align: center;
    font-family: "Poppins", san-serif;
    font-size: 1rem;
    font-weight: 400;
    margin-bottom:3rem;
    width:45%;
  }
    @media(max-width:768px){
    p{
      width:100%;
    }
    }
}`;

export const ContactsInfo = styled.div`
  display: flex;
  justify-content:space-between;
   padding: 50px;
  border-radius: 10px;
  border: 1px solid #d7d7d7;
  background: #fff;

  @media(max-width:999px){
   flex-direction:column;
   align-items: center;
  }
`;

export const ContactsForm = styled.div`
  border-right: 1px solid #d7d7d7;
  padding:50px;
  width:500px;
  input::placeholder,
    textarea::placeholder {
      color: #6e6e6e;
      font-family:"Poppins", sans-serif;
      font-size: 1.25rem;
      font-weight: 600;
    }
  @media(max-width:968px){
    width:auto;
    padding:0;
    border-right:none;
  }
  h2 {
    color: #077fde;
    font-family: "Poppins", san-serif;
    font-size: 1.75rem;
    font-weight: 600;
  }
  form {
    border: 1px soild red;
    display: flex;
    flex-direction: column;

    label {
      padding: 14px 16px;
      display: flex;
      column-gap: 14px;
      align-items:center;
      border-radius: 10px;
      border: 1px solid #d7d7d7;
      margin-bottom:10px;
      background:#ffffff;
    }
    input {
      border: none;
      outline: none;
      color: #6e6e6e;
      font-family:"Poppins", sans-serif;
      font-size: 1.25rem;
      font-weight: 600;
      width:100%;
    }
    input::placeholder,
    textarea::placeholder {
      color: #6e6e6e;
      font-family:"Poppins", sans-serif;
      font-size: 1.25rem;
      font-weight: 600;
    }
    span{
      color: #EF401F;
      font-family:"Poppins", sans-serif;
font-size: 1.125rem;
font-weight: 600;

    }
    textarea {
      padding: 14px 16px;
      border-radius: 10px;
      border: 1px solid #d7d7d7;
      margin-bottom:40px;
    }
    button {
      padding: 20px 24px;
      border-radius: 10px;
      background: #077fde;
      color: #fff;
      text-align: center;
      font-family:"Poppins", san-serif;
      font-size: 1rem;
      font-weight: 600;
      border:none;
      outline:none;
    }
  }
`;
export const ContactsDetails = styled.div`
display:flex;
flex-direction:column;
width:500px;
padding:65px;

@media(max-width:768px){
  width:auto;
  padding:0;
}
`;
export const Details = styled.div`
display:flex;
flex-direction:column;
margin-bottom:50px;
  h3 {
    color: #077fde;
    font-family:"Poppins", san-serif;
    font-size: 1.125rem;
    font-weight:600;
    line-height:1rem;
  }
  p,
  div,
  a {
    color: #898989;
    font-family: "Poppins", san-serif;
    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
  }

  div {
    display: flex;
    align-items:center;
    column-gap: 12px;
  }
`;
export const SocialCon = styled.div`
display flex;
column-gap:16px;
`;
