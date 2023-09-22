import styled from "styled-components";

export const FeedbackContainer = styled.div`
  margin-top: 9.5rem;
  position:relative;
  h1 {
    margin: 2rem 0;
    font-family: "Poppins", san-serif;
    font-size: 2rem;
    font-weight: 600;
    color: #514D59;
  }
  p{
    color: #898989;
font-family: Poppins;
font-size: 1rem;
font-weight: 500;
max-width: 537.638px;
  }

  @media (max-width: 968px) {
    margin-top: 40px;
    position:unset;
    h1 {
      font-size: 1.9rem;
    }
    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;
export const FeedComment = styled.div`
border-radius: 12.202px;
background: #F6F4FF;
box-shadow: 0px 15.25215px 45.75646px 0px rgba(0, 0, 0, 0.12);
max-width:514px;
display:flex;
gap:2rem;
justify content:space-between;
align-items:center;
text-align:center;
height:115px;
margin-left:auto;
border-bottom:7px solid #3685FB;
padding:0 70px 0 28px;

p{
  font-family:'Poppins',sans-serif;
  font-size: 1rem; 
  max-width:344px;
  font-weight:300;
}
@media (max-width: 968px) {
  display:none;
  
}

`;

export const ImgCon = styled.div`
margin-left:9.5rem;
display:flex;
gap:1rem;

#img1{
  transform:translateX(-23px);
  align-items:center;
}
#img2{
    position:absolute;
    bottom:15%;
    left:35%;    
}

#img3{
    position:absolute;
    bottom:25%;
    left:55%;
}

#img4{
    position:absolute;
    bottom:35%;
    left:75%;
}
@media (max-width: 868px) {
  margin-top:2rem;
  margin-left:0;
  flex-direction:column;
#img1,#img2, #img3, #img4{
  display:none;
  
}
}`;

export const MobileImageView = styled.div`
display:none;
@media (max-width: 968px) {
  display:flex;
  flex-direction:column;
  display: flex;
  width: 312px;
  padding: 12px;
  align-items: flex-start;
  gap: 16px;

  
    #t1, #t3, #t5{
    position:relative;
    right:16px;
  }
    #t2, #t4, #t6{
    position:relative;
    left:16px;
  }
}

`
