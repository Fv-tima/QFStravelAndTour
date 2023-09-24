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
display:none;
@media (max-width: 968px) {
  
  border-radius: 7.739px;
background: #F6F4FF;
box-shadow: 0px 15.25215px 45.75646px 0px rgba(0, 0, 0, 0.12);
width:auto;
flex-shrink: 0;
display:flex;
gap: 8px;
justify-content:space-between;
align-items:center;
text-align:center;
height: 72.938px;
border-bottom:7px solid #3685FB;
border-bottom-radius:7.739px;
padding:0 70px 0 28px;
img{ 
  width: 41.596px;
height: 41.268px;
}
p{
  display: flex;
width: 239px;
height: 38px;
flex-direction: column;
justify-content: center;
  color: var(--Dark, #25282B);
text-align: left;
font-family: "Poppins",sans-serif;
font-size: 12px;
font-style: normal;
font-weight: 300;
line-height: normal;
}
  
}

`;
export const NextFeed = styled.div`
display:none;
@media (max-width: 968px) {
  
  //#F6F4FF
  border-radius: 7.739px;
background: #F6F4FF;
box-shadow: 0px 15.25215px 45.75646px 0px rgba(0, 0, 0, 0.12);
width:auto;
flex-shrink: 0;
display:flex;
gap: -1px;
justify-content:center;
align-items:center;
text-align:center;
height: 72.938px;
border-bottom:7px solid #3685FB;
border-bottom-radius:50%;
padding:0 70px 0 28px;
img{ 
 
  position:relative;
  left:30px;
  width: 41.596px;
height: 41.268px;
}
p{
  margin-right:-18px;
  display: flex;
width: 239px;
height: 38px;
flex-direction: column;
justify-content: center;
  color: var(--Dark, #25282B);
text-align: right;
font-family: "Poppins",sans-serif;
font-size: 12px;
font-style: normal;
font-weight: 300;
line-height: normal;
}
  
}


`
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
  gap:16px;
}

`
