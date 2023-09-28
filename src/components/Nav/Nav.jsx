import React, { useState } from "react";
import HLogo from "../../assets/images/Flogo.png";
import group from "../../assets/svg/group.svg";
import openIcon from "../../assets/svg/Vectorr.png";
import closeIcon from "../../assets/svg/close2.png";

import {
  Header,
  HeaderLogo,
  Navbar,
  NavbarLinks, 
  MenuIcon,
  MenuButton,
  MobileHeader,
  MobileLogo,
  MobileNavbar,
  MobileNavContainer,
  MobileNavInner,
  MobileNavLinks,
  MobileNavList,
  Backdrop,
  NavbarHeader
} from "./Nav.styled";

import { NavLink } from "react-router-dom";
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <> 
      <Header>
        <HeaderLogo>
          <img src={ HLogo } />
          <img src={ group } id="depends" />
        </HeaderLogo>
        <Navbar>
        <NavbarLinks><NavLink to="/">Home</NavLink></NavbarLinks>
        <NavbarLinks><NavLink to="/about">About</NavLink></NavbarLinks>
        <NavbarLinks><NavLink to="/package">Package</NavLink></NavbarLinks>
        <NavbarLinks><NavLink to="/contact">Contact Us</NavLink></NavbarLinks>
        </Navbar>
        <MenuIcon> 
          <MenuButton onClick={toggleNav}>
            { isOpen? (
              <img src={ closeIcon } width="35%" alt="" />
            ) : (
              <img src={ openIcon } width="97%" alt="" />
            ) }
          </MenuButton>
        </MenuIcon>
      </Header>

     {/* Mobile View */}
      { isOpen && (
        <MobileHeader>
          <Backdrop />
          <MobileNavbar> 
            
              <NavbarHeader> 
                <MobileLogo>
                  <img src={ HLogo } />
                </MobileLogo>
                <MenuButton onClick={ toggleNav }>
                  { isOpen ? (
                    <img src={ closeIcon } width="25%" alt="" />
                  ) : (
                    <img src={ openIcon } width="25%" alt="" />
                  ) }
                </MenuButton>
              </NavbarHeader>

              <MobileNavContainer>
                <MobileNavInner>
                  <MobileNavList>
                    <MobileNavLinks><NavLink to="/">Home</NavLink></MobileNavLinks>
                  </MobileNavList>
                  <MobileNavList>
                    <MobileNavLinks>
                    <NavLink to="/about">About</NavLink>
                    </MobileNavLinks> 
                  </MobileNavList>
                  <MobileNavList>
                    <MobileNavLinks><NavLink to="/package">Package</NavLink></MobileNavLinks>
                  </MobileNavList>
                  <MobileNavList>
                    <MobileNavLinks><NavLink to="/contact">Contact Us</NavLink></MobileNavLinks>
                  </MobileNavList>
                </MobileNavInner>
              </MobileNavContainer>
            
          </MobileNavbar>
          </MobileHeader>

      ) }

      
    </>
  );
}


