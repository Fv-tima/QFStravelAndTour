import styled from "styled-components";

export const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap:1.3rem;
  paddiing-inline:40px;



  @media (max-width: 868px) {
    flex-direction: column;
    Gap:1rem;

    
  }

  img{
    max-width:100%;
  }
`;

export const SectionContent = styled.div`

${'' /* gap:4px; */}


  h1 {
    line-height:90px;
    display:flex;
    flex-direction:column;
    font-family: "Poppins", san-serif;
    font-size: 64px;
    font-weight: 700;
    color: #077fde;
    width:540px;
    ${'' /* height:30px; */}

  }

  img{
    width:252.47px;
    height:24px;
  }

  p {
    position:relative;
    top:-39px;
    font-family: "Poppins", san-serif;
    font-size: 18px;
    font-weight: 400;
    color:#25282B;
    width:550px;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 2.4rem;
      width:340px;
       line-height:50px;
    }
    p {
      width:350px;
      font-size: 1rem;
      position:relative;
    top:5px;
      line-height: 1.5rem;
    }
    img{
    width:140px;
    height:24px;
  }
    width: 100%;
  }
`;

export const SectionImg = styled.img`
width:594px;
    height:370px;`
