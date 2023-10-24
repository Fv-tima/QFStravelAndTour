import styled from "styled-components";

export const About = styled.div`
  margin-top: 3rem; 
  padding: 3rem 6.25rem;
  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
    font-weight: 600;
    color: #514D59;
  }
    @media(max-width:868px){ 
      padding: 20px 30px 0px;
      h1 {
      font-size: 1.67rem;
      }
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
    font-family: "Poppins", sans-serif;
    font-size: 2.5rem;
    font-weight: 600;
    color: #25282b;
  }

  p {
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: #514D59;
;
  }
    @media(max-width:868px){
    flex-direction:column;
     
      
      h1 {
        font-size: 1.7rem;
      }

    img {
      max-width: 100%;
      margin:0 auto;
    }
  }
  `
  ;
export const AboutInnerContent = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

gap: 5.125rem;

  h1 {
      font-size: 48px;
      font-weight:600;
      color:#514D59;
      line-height:60px;
    }

img {
      max-width: 100%;
      margin:0 auto;
    }
 p{
  padding-block:1rem;
  width:450px;
  color: #514D59;
  
 }

   @media (max-width: 868px) {
    flex-direction: column;
    gap:1rem;
    
    h1{
      font-size: 32px;
    }
      p{
    width:342px;
    color: #514D59;
   }
    img{
    max-width:100%;
  }
   }
  
 
  


`;
export const AboutUs = styled.div`
  display:flex;

  align - items: center;
  justify - content: space - between;
  gap: 6.255rem;
  padding:0.125rem 1.125rem ;

  p{
  padding-block:1rem;
  width:380px;
  
 }
  @media (max-width: 868px) {
    
    flex-direction: column;
    gap:1rem;
     transform: translateY(-40px);
     p{
    width:342px;
   }
  img{
    max-width:100%;
  }
   }

   

`;
export const Mission = styled.div`
display: flex;
align - items: center;
justify - content: space - between;

gap: 5.125rem;
@media (max-width:868px){
  display:flex;
  flex-direction: column-reverse;
    gap:1rem;
}



`;
export const AboutLastInfo = styled.div`
padding-top:70px;
 
 transform: translateY(100px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 8rem;
  flex-direction: column;
  padding:1.125rem 14.25rem;
    font-family: 'Poppins',sans-serif;
   color:#514D59;
  align-text: center;
   .values,.team{
transform: translateY(-50px);
      

   }
   .values h1{
text-align:center;
   }
   .values p{
    width:695px;
   }
 
   h1 {
      font-size: 48px;
      color:#514D59;
      line-height:60px;
    }
    

   @media (max-width: 768px) {
    padding:1.125rem ;
    position:unset;
    padding:1.125rem 10.25rem;
    .valuesheader,.team{
      transform: translateY(-90px);
    }
    h1 {
      font-size: 2rem;
    }
    .values p {
      font-size: 16px;
      width:375px;
    }
    p{
      font-size: 16px;
      width:75px;
    }
  }
  
`
export const AboutLastInfoContents = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8rem;
  flex-direction: column;
  padding:1.15rem ;
  transform: translateY(-40px);
   #team {
      font-size: 16px;
      line-height: 22px;
       width:650px;
       height:88px;
       text-align: center;
    }
  #values {
      font-size: 16px;
      line-height: 22px;
      text-align: center;
      font-weight:400;
      transform: translateY(20px)
    }
    @media (max-width: 768px) {
      transform: translateY(-120px);
      padding:none ;
      #team{
        width:390px;
      }
    }

`;

export const BottomContainer = styled.div`
    display:flex;
    justify-content:center;
    gap:1rem;
    transform: translateY(100px);

 @media (max-width: 868px) {
   display:grid;
  grid-template-columns:1fr;
  place-items:center;
    gap:1rem;
    transform: translateY(10px);

   }

   

  
`

export const BottomImgCon = styled.div`
  
#img1{
  margin-right:48px;
}

#img2{
  margin-left:8px;
}

#img3{
  margin-left:48px;
}

#img4{
  margin-left:8px;
}

@media (max-width: 868px) {
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  gap: 1rem;
  #img1, #img2, #img3, #img4 {
    // max-width: 150px;
  }

  #img1 {
    margin-right: unset;
  }

  #img2 {
    margin-right: unset;
  }

  #img3 {
    margin-left: unset;
  }

  #img4 {
    margin-left: unset;
  }
}
`;

export const TeamNames = styled.div`
  display:flex;
  justify-content: center;

  h1 {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    color: #514D59;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    transform: translateY(-14px);
    font-family: 'Poppins', sans-serif;
    color: #898989;
  }

  #princess {
    padding-right: 32px;
    font-weight: 500;
    color: #514D59;
  }

  #victor {
    padding-left:40px;
    font-weight:500;
    color: #514D59;
  }

  #frank {
    padding-left:40px;
    font-weight:500;
    color: #514D59;
  }

 #solo {
    padding-left: unset;
    font-weight:500;
    color: #514D59;
  }

 

  @media (max-width: 868px) {
    flex-direction: column;
    justify-content: center;
    align-content: center;
    Gap: 1rem;

  #princess {
    padding-right: unset;
  }

  #victor {
    padding-right: unset;
    margin-top: 80px;
  }

  #frank {
    padding-left: unset;
  }

  #solo {
    padding-left: unset;
  }
  
}
`