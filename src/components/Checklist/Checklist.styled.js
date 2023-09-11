import { styled } from "styled-components";

export const ChecklistContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top:2.5rem;
  column-gap: 7.5rem;
  @media(max-width:868px){
    flex-direction:column;
    align-items:center;
    gap: 2rem;
  }
  `
  export const ChecklistContent = styled.div`
  max-width:560px;
  h1 {
    font-family: "Poppins", san-serif;
    font-size: 2.5rem;
    font-weight: 700;
    color: #181818;
  }

  li {
    font-family: "Poppins", san-serif;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: #909090;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
  ` 
