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
  @media (max-width:868px){
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
   
      #mobile-btn{
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
    font-family: "Poppins", san-serif;
    font-size: 3.5rem;
    font-weight: 700;
    color: #514D59;
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
    margin-top:50px;
    h1 {
      font-size: 39.473px;
    }
    p {
      font-size: 16px;
      line-height: 1.5rem;
      width:343px;
    }
    button{
      width:100%;
    }
  }
`;

export const InnerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 3rem;
  @media (max-width:868px){
    img{
      position: absolute;
      left:9999px;
    }
    p{
      font-size:16px;
      color:#25282B;
    }
  }
`;

