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

import { NavLink } from "react-router-dom";
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);Nav

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
                    <MobileNavLinks><NavLink to="/">Home</NavLink></MobileNavLinks>
                  </MobileNavList>
                  <MobileNavList>
                    <MobileNavLinks>
                    <NavLink to="/about">About</NavLink>
                    </MobileNavLinks>
                  </MobileNavList>
                  <MobileNavList>
                    <MobileNavLinks><NavLink to="/package">Packages</NavLink></MobileNavLinks>
                  </MobileNavList>
                  <MobileNavList>
                    <MobileNavLinks><NavLink to="/contact">Contact Us</NavLink></MobileNavLinks>
                  </MobileNavList>
                </MobileNavInner>
              </MobileNavContainer>
            
          </MobileNavbar>
          </MobileHeader>
        </div>

      
    </>
  );
}
