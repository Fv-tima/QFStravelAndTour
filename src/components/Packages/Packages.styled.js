import styled from "styled-components";

export const PackagesCon = styled.div`
  margin-top: 3.75rem;
  h1{
    font-family: "Poppins", sans-serif;
    font-size: 40px;
    font-weight: 700;
    color: #181818;
    padding:0 1rem;
  }
`;

export const PackagesImg = styled.div`
  display: flex;
  flex-direction: column;
  img {
    max-width: 100%;
  }
`;

export const PackagesContainer = styled.div`
  display: flex;
  margin:7rem 0;
  justify-content: space-between;
  column-gap: 2.5rem;
  align-items: center;

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 40px;
    font-weight: 700;
    color: #181818;
  }

  p,
  li {
    font-family: "Poppins", sans-serif;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: #909090;
  }

  button {
    border-radius: 8px;
    background: #35aff4;
    padding: 12px 24px;
    color: #fff; 
    text-align: center;
    font-family: "Poppins", san-serif;
    font-size: 1rem;
    font-weight: 500;
    border: none;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor:pointer;
  }

  @media(max-width:868px){
    flex-direction:column;
    align-items:center;
    gap: 2rem;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
    p, li {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const PackagesContent = styled.div`
  width: 560px;
  h1{
    transform: translateX(-18px);
  }
  @media (max-width:868px){
    width: 100%;
  }
`;
 
export const Location = styled.div`
  display: flex;
  justify-content: space-around;
  width: 310px;
  height: 79px;
  padding: 10px;
  align-items: center;
  background: #fff;
  box-shadow: 0px 4px 34px 0px rgba(50, 75, 104, 0.17);
  border-radius: 12px;
  margin-left: auto;
  margin-bottom: 4rem;
  cursor: pointer;
`; 

export const Content = styled.div`
display:flex;
align-items: center;
flex-wrap: wrap;
column-gap:1rem;
line-height: 1rem;
margin-left:8px;

  h2 {
    color: #181818;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 500;
    line-height: 0;
  }

  p {
    color: #909090;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 450;
    line-height: 5px;
  }
  span {
    color: #35aff4;
    font-weight: 500;
  }

  span:nth-child(2) {
    color: #181818;
    font-weight: 500;
  }
  img{
    width:16px;
  }

`;

{'' /* export const Ratings = styled.div`
  display: flex;
  justify-content: space-between;
  img{
    width:22px;
  }
`; */}

export const Comment = styled.div`
  display: flex;
  width: 240px;
  column-gap: 1rem;
  height: 72px;
  padding: 12px;
  align-items: center;
  justify-content:center;
  background: #fff;
  border-radius: 82px;
  box-shadow: 0px 4px 34px 0px rgba(50, 75, 104, 0.17);
  padding: 12px;
  margin-top: 4rem;
  cursor: pointer;
`;
