import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  height: 80px;
  column-gap:539px;
  justify-content:center;
  align-items: center;
  gap: 1rem;
  background:#fff;
  padding:1rem 6.25rem;
  overflow:hidden;

  @media (max-width: 868px) {
    height: 60px;
    padding:20px ;
  }
`;

export const HeaderLogo = styled.div`
  display: flex;
  flex: 1 1 0%;
  width: 0;
  position: relative;
  visibility: visible;
  #depends{
    visibility: hidden;
  }
  @media (max-width: 868px) {
    visibility: hidden;
   #depends{
    position: absolute;
    top:50px;
    visibility: visible;
    } 
  }
`;

export const Navbar = styled.nav`
  display: none;
  color: #25282b;
  font-family: "Poppins", san-serif;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  align-items: center;
  gap: 2rem;

  @media (min-width: 868px) {
    display: flex;
    column-gap:56px;
  }
`;

export const NavbarLinks = styled.a`
a{
  color: #25282b;
}
  &:hover, .active {
    color: #077fde;
    transition:0.5s;
  }
`;


export const MenuIcon = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MenuButton = styled.button`
  padding: 0.5rem;
  outline: none;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

export const MobileHeader = styled.header`
  display: flex;
  position: relative;
  z-index: 50;
  transition-duration: 400ms;

  @media (min-width: 868px) {
    display: none;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  opacity: 0.25;
`;

export const MobileNavbar = styled.nav`
  display: flex;
  overflow:hidden;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #fafafa;
  flex-direction: column;
  width: 100%;
  @media (max-width:868px){
    max-width:22.9rem;
    
  }
  

`;

export const NavbarHeader = styled.div`
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: center;
`;

export const MobileLogo = styled.a`
  margin-right: auto;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  line-height: 1;
`;

export const MobileNavContainer = styled.div`
 overflow:hidden; 
`;

export const MobileNavInner = styled.div`
overflow:hidden; `;

export const MobileNavList = styled.li`
  margin-bottom: 0.25rem;
  list-style-type: none;
`;

export const MobileNavLinks = styled.a`
  display: block;
  padding: 1rem;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: bold;
  a{
    color: #25282b;
  }
  &:hover, .active {
    color: #077fde;
     transition-duration: 300ms;
  }
`;
