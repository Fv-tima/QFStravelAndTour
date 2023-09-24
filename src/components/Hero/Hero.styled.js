import styled from "styled-components";

export const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap:auto;
  margin-top:2.5rem;
  line-height:auto;
  

  @media (max-width: 968px) {
    margin-top:-0.2em;
    display:flex;
    flex-direction: column-reverse;
    // flex-direction: column;
    gap:1.5rem;

  }

  img{
    max-width:100%;
  }
`;

export const SectionContent = styled.div`

  h1 {
    margin-top:-0.5rem;
    display:flex;
    flex-direction:column;
    font-family: "Poppins", sans-serif;
  width:auto;
  height: 288px;
    color: #077fde;
    font-size:64px;
font-style: normal;
font-weight: 700;
 line-height:normal;
  }

  #one{
    width: 252.469px;
height: 24px;
flex-shrink: 0;
  }

  p {
    margin-top:-1.7rem;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 400;
    color:#25282B;
    width:343px;
    height: 81px;
    line-height:27px;
  }
  #two,#mob{
    display:none;
  }
  button{
    display:none;
  }

  // media query
  @media (max-width: 968px) {
    button{
      cursor:pointer;
      color: var(--White, #FFF);
text-align: center;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
white-space:nowrap;
      outline:none;
      border:unset;
      display: flex;
width: auto;
height: 40px;
padding: 9px 133px;
margin:0 auto;
justify-content: center;
align-items: center;
gap: 10px;
margin-top: 12px;
border-radius: 5.481px;
background: var(--Primary, #077FDE);
    }
    #one,#desk{
    display:none;
  }
  #mob{
    display:initial;
  }
    #two{
      display:flex;
      width: 143.849px;
      height: 13.674px;


    }
    span{
     
    }
 
    h1,#mob{
     word-spacing:normal;
      font-size: 24px;
      width: 343px;
      line-height: normal;
      height: auto;
      
    }
    p {
      margin-top:1rem;
      color: #25282B;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 21px */
    }
    width: 100%;
  }
`;

export const SectionImg = styled.img`
width:100%;`
