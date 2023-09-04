import React, { useState } from "react";
import HLogo from "../../assets/images/logo.png";
import openIcon from "../../assets/svg/menu2.png";
import closeIcon from "../../assets/svg/close2.png";
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
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Header>
        <HeaderLogo>
          <img src={HLogo} />
        </HeaderLogo>
        <Navbar>
          <NavbarLinks href="/">Home</NavbarLinks>
          <NavbarLinks href="/about">About</NavbarLinks>
          <NavbarLinks href="/packages">Packages</NavbarLinks>
          <NavbarLinks href="/contact">Contact Us</NavbarLinks>
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
          <MenuButton onClick={toggleNav}>
            {isOpen ? (
              <img src={closeIcon} width="35%" alt="" />
            ) : (
              <img src={openIcon} width="35%" alt="" />
            )}
          </MenuButton>
        </MenuIcon>
      </Header>

      {isOpen && (
        <MobileHeader>
          <Backdrop />
          <MobileNavbar>
            <NavbarHeader>
              <MobileLogo>
                <img src={HLogo} />
              </MobileLogo>
              <MenuButton onClick={toggleNav}>
                {isOpen ? (
                  <img src={closeIcon} width="40%" alt="" />
                ) : (
                  <img src={openIcon} width="40%" alt="" />
                )}
              </MenuButton>
            </NavbarHeader>

            <MobileNavContainer>
              <MobileNavInner>
                <MobileNavList>
                  <MobileNavLinks href="/">Home</MobileNavLinks>
                </MobileNavList>
                <MobileNavList>
                  <MobileNavLinks href="/about">
                    About
                  </MobileNavLinks>
                </MobileNavList>
                <MobileNavList>
                  <MobileNavLinks href="/packages">Packages</MobileNavLinks>
                </MobileNavList>
                <MobileNavList>
                  <MobileNavLinks href="/contact">Contact Us</MobileNavLinks>
                </MobileNavList>
              </MobileNavInner>
            </MobileNavContainer>
          </MobileNavbar>
        </MobileHeader>
      )}
    </>
  );
}
