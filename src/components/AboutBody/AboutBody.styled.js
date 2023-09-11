import styled from "styled-components";


export const About = styled.div`
    margin-top: 2.5rem;
    h1{
    margin:2rem 0;
    font-family: "Poppins", san-serif;
    font-size: 2rem;
    font-weight: 600;
    color: #25282b;
    }

   
`;
export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 8rem;
  flex-direction: column;
`;
export const AboutContent = styled.div`
  display: grid;
  row-gap:1rem;
  padding:3.125rem 6.25rem;
  


  h1 {
    font-family: "Poppins", san-serif;
    font-size: 2.5rem;
    font-weight: 600;
    color: #25282b;
  }

  p {
    font-family: "Poppins", san-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: #25282b;
  }
    @media(max-width:868px){
    flex-direction:column;
     padding:2.15rem;

      h1 {
        font-size: 2rem;
      }

    img {
      max-width: 100%;
      margin:0 auto;
    }
  }
  `
  ;
export const AboutInnerContent = styled.div`
  // border: 1px solid #333;
display: flex;
align - items: center;
justify - content: space - between;
gap: 5.125rem;
  // padding:3.125rem 6.25rem;

img {
      max-width: 100%;
      margin:0 auto;
    }
 p{
  padding-block:1rem;
  // box-sizing: border-box;
  width:450px;
  
 }

   @media (max-width: 868px) {
    flex-direction: column;
    Gap:1rem;
   }
  p{
    width:380px;
   }
 
  img{
    max-width:100%;
  }


`;
export const AboutUs = styled.div`
  display:flex;
  // flex-direction:column;

  align - items: center;
  justify - content: space - between;
  gap: 6.255rem;
  padding:0.125rem 1.125rem ;

  p{
  padding-block:1rem;
  // box-sizing: border-box;
  width:380px;
  
 }
  @media (max-width: 868px) {
    
    flex-direction: column;
    // flex-direction: column-reverse;
    gap:1rem;
   }

   p{
    width:380px;
   }
  img{
    max-width:100%;
  }

`;
export const AboutLastInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 8rem;
  flex-direction: column;
  padding:1.125rem 14.25rem;
  align-text: center;
   transform: translateY(-20px);

   @media (max-width: 768px) {
    padding:1.125rem ;
    position:unset;
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
  
`
export const AboutLastInfoContents = styled.div`
  // border:4px groove #333;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8rem;
  flex-direction: column;
  padding:1.15rem ;
  transform: translateY(-40px);
  p{
    // padding-bottom:1px;
    text-align: center;
  
  }
`;

export const BottomContainer = styled.div`
    display:flex;
    padding-bottom:40px;
    justify-content:center;

 @media (max-width: 868px) {
    flex-direction: column;
    // justify-content:center;
    align-content:center;
    Gap:1rem;

   }

   

  
`

export const BottomImgCon = styled.div`
  
#img1{
  margin-right:48px;
}
#img2{
  transform:translateY(-55px)
}
#img3{
  margin-left:48px;
}

 @media (max-width: 868px) {
    flex-direction: column;
    justify-content:center;
    align-content:center;
    Gap:1rem;
     #img3, #img2, #img1{
   margin-left:25px;

  }
  #img2{
  transform:translateY(-4px)
}
   }
   

 
`;
export const TeamNames = styled.div`
  display:flex;
  justify-content:center;

  h1{
    font-size:1rem;
    text-align: center;
    font-family: Poppins;
  }
p{
color: #898989;
font-family: Poppins;
font-size: 1rem;
font-weight: 500;
  }
  #princess{
    padding-right:32px;
  }
 #Jd{
  padding-left:40px;
 }
 #Cyril{
  transform:translateY(-75px)
 }

   @media (max-width: 768px) {
    flex-direction: column;
    justify-content:center;
    align-content:center;
    Gap:1rem;
    #princess{
    padding-right:30px;
  }
 #Jd{
  padding-right:60px;
 }
 #Cyril{
  padding-right:27px;
    transform:translateY(-5px)
 }
   }
`