import React, { useState } from "react";
import HLogo from "../../assets/images/Flogo.png";
import group from "../../assets/svg/group.svg";
import openIcon from "../../assets/svg/Vectorr.png";
import closeIcon from "../../assets/svg/close2.png";
import "./navstyle.css";
import {
  Header,
  HeaderLogo,
  Navbar,
  NavbarLinks, 
  MenuIcon,
  MenuButton,
  SearchIcon,
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
export default function Nav () {
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
          <NavbarLinks href="/"> Home</NavbarLinks>
          <NavbarLinks href="about">About</NavbarLinks>
          <NavbarLinks href="package">Packages</NavbarLinks>
          <NavbarLinks href="contact">Contact Us</NavbarLinks>
        </Navbar>
        <SearchIcon>
          <select name="Language" id="Language">
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="Russian">Russian</option>
            <option value="Hausa">Hausa</option>
            <option value="German">German</option>
            <option value="Twi">Twi</option>
            <option value="Spanish">Spanish</option>
            <option value="Dutch">Dutch</option>
            <option value="Ki Swahilli">Ki Swahilli</option>
          </select>
        </SearchIcon>
        <MenuIcon>
          <MenuButton onClick={  toggleNav }>
            { isOpen? (
              <img src={ closeIcon } width="35%" alt="" />
            ) : (
              <img src={ openIcon } width="97%" alt="" />
            ) }
          </MenuButton>
        </MenuIcon>
      </Header>

     
      <div className={ isOpen ? 'content-parent-show' : 'content-parent' }>
        <MobileHeader className='content'>
          <Backdrop />
          <MobileNavbar >
            
              <NavbarHeader>
                <MobileLogo>
                  <img src={ group } />
                </MobileLogo>
                <MenuButton onClick={ toggleNav }>
                  { isOpen ? (
                    <img src={ closeIcon } width="40%" alt="" />
                  ) : (
                    <img src={ openIcon } width="40%" alt="" />
                  ) }
                </MenuButton>
              </NavbarHeader>

              <MobileNavContainer>
                <MobileNavInner>
                  <MobileNavList>
                    <MobileNavLinks href="/">Home</MobileNavLinks>
                  </MobileNavList>
                  <MobileNavList>
                    <MobileNavLinks href="about">
                      About
                    </MobileNavLinks>
                  </MobileNavList>
                  <MobileNavList>
                    <MobileNavLinks href="package">Packages</MobileNavLinks>
                  </MobileNavList>
                  <MobileNavList>
                    <MobileNavLinks href="contact">Contact Us</MobileNavLinks>
                  </MobileNavList>
                </MobileNavInner>
              </MobileNavContainer>
            
          </MobileNavbar>
          </MobileHeader>
        </div>

      
    </>
  );
}
