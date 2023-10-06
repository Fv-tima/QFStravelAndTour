import styled from "styled-components";

export const Abouts = styled.div`
  margin-top: 2.5rem;
  h1 {
    margin: 2rem 0;
    font-family: "Poppins", san-serif;
    font-size: 2rem;
    font-weight: 600;
    color: #514D59;
  }
  @media (max-width:900px){
    
    width:100%;
    h1{font-size: 20px;}
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  align-items: center; 
  column-gap: 8rem;

  img {
    max-width: 100%;
  }
  #mobile-btn{
    display:none;
  }
  @media(max-width:868px){
    flex-direction:column;
    width:100%;
    
    #mobile-btn{
      display:initial;
      width: 57.068px;
      height: 57.068px;
      position: relative;
      bottom:60px;
      right:-252px;
    }
    img {
      max-width: 100%;
      margin:0 auto;
      display:inline;
    }
  }
  @media(max-width:500px){
    flex-direction:column;
    width:100%;
   
      #mobile-btn{
        display:initial;
        width: 57.068px;
        height: 57.068px;
        position: relative;
        bottom:60px;
        right:-142px;
      }
    img {
      max-width: 100%;
      margin:0 auto;
      display:inline;
    }
  }
  `;

  export const AboutContent = styled.div`
  
  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 3.5rem;
    font-weight: 700;
    color: #514D59;
  }
  
  p {
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 400;
   
    color: #25282b;
  }

  button {
    border-radius: 10px;
    background: #077fde;
    padding: 15px 32px;
    color: #fff;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 500;
    border:none;
    cursor:pointer;
    
  }
img{
  cursor:pointer;
}

  @media (max-width: 500px) {
     width:100%;
    margin-top:-15%;
    h1 {
      font-size: 39.473px;
     
    }
    p {
      font-size: 16px;
     line-height: 18px;
      width:100%;
    }
    button{
      width: 100%;
    }
  }
  @media (max-width: 988px) {
     width:100%;
    // margin-top:-15%;
    h1 {
      font-size: 39.473px;
     
    }
    p {
      font-size: 16px;
     line-height: 18px;
      width:100%;
    }
    button{
      width: 100%;
    }
  }
`;

export const InnerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 1rem;
  
  @media (max-width:900px){
    margin-top:-5%;
    img{
      position: absolute;
      left:9999px;
    }
    p{
      
      font-size:16px;
      color:#25282B;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; 
    }
  }
`;

