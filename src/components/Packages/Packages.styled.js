import styled from "styled-components";

export const PackagesCon = styled.div`
  margin-top: 2.5rem;
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
    font-family: "Poppins", san-serif;
    font-size: 2.5rem;
    font-weight: 700;
    color: #181818;
  }

  p,
  li {
    font-family: "Poppins", san-serif;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: #909090;
  }

  button {
    border-radius: 8pxpx;
    background: #35aff4;
    padding: 12px 24px;
    color: #fff;
    text-align: center;
    font-family: "Inter", san-serif;
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
  max-width: 560px;
`;

export const Location = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 310px;
  height: 79px;
  padding: 12px;
  align-items: start;
  background: #fff;
  box-shadow: 0px 4px 34px 0px rgba(50, 75, 104, 0.17);
  border-radius: 12px;
  margin-left: auto;
  margin-bottom: 4rem;
  cursor: pointer;
`;

export const Content = styled.div`
  h2 {
    color: #181818;
    font-family: "Inter", san-serif;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 0;
  }

  p {
    color: #909090;
    font-family: "Inter", san-serif;
    font-size: 1rem;
    font-weight: 450;
  }
  span {
    color: #35aff4;
    font-weight: 500;
  }

  span:nth-child(2) {
    color: #181818;
    font-weight: 500;
  }

`;

export const Ratings = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Comment = styled.div`
  display: flex;
  max-width: 240px;
  column-gap: 1rem;
  height: 72px;
  padding: 12px;
  align-items: center;
  background: #fff;
  border-radius: 82px;
  box-shadow: 0px 4px 34px 0px rgba(50, 75, 104, 0.17);
  padding: 12px;
  margin-top: 4rem;
  cursor: pointer;
`;
