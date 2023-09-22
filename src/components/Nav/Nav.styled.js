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

  @media (max-width: 868px) {
    gap: 1rem;
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
  color: #25282b;
  transition:0.5s;
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
  ${ '' /* transition-duration: 300ms; */ }

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
  overflow-y: auto;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  background-color: #fff;
  flex-direction: column;
  width: 100%;
  max-width: 24rem;

`;

export const NavbarHeader = styled.div`
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
`;

export const MobileLogo = styled.a`
  margin-right: auto;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  line-height: 1;
`;

export const MobileNavContainer = styled.div`
  
`;

export const MobileNavInner = styled.div``;

export const MobileNavList = styled.li`
  margin-bottom: 0.25rem;
  list-style-type: none;
`;

export const MobileNavLinks = styled.a`
  display: block;
  padding: 1rem;
  color: #515151;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: bold;
  transition-duration: 300ms;

  &:hover, .active {
    color: #077fde;
     transition-duration: 300ms;
  }
`;
