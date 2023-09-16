import styled from "styled-components";

export const FeedbackContainer = styled.div`
  margin-top: 9.5rem;
  position:relative;
  h1 {
    margin: 2rem 0;
    font-family: "Poppins", san-serif;
    font-size: 2rem;
    font-weight: 600;
    color: #25282b;
  }
  p{
    color: #898989;
font-family: Poppins;
font-size: 1rem;
font-weight: 500;
max-width: 537.638px;
  }

  @media (max-width: 768px) {
    position:unset;
    h1 {
      font-size: 2.5rem;
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
  font-size: 0.8rem;
  max-width:344px;
}`

export const ImgCon = styled.div`
margin-left:9.5rem;
display:flex;
gap:1rem;


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
@media (max-width: 968px) {
  margin-top:2rem;
  margin-left:0;
  flex-direction:column;
#img2, #img3, #img4{
  display:none;
  
}
}`
