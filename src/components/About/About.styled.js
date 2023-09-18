import styled from "styled-components";

export const Header = styled.div`
    img {
      display: flex;
      align-items: center;
      width: 100%;
      
      }
      #two{
        display:none;
      }
      @media (max-width:868px){
        #one{
          display:none;
        }
        #two{
          display:flex;
          align-content:center;
          top:-50px;
          scale:1.1;
        }
        
        
        
      }:
`;
