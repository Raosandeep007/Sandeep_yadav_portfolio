import React, { useState } from "react";
import {
  Line,
  Menu,
  NavList,
  NavLogo,
  NavMenuList,
  StyledCTA,
  StyledNavbar,
  StyledNavLinks,
} from "../styles/Navbar.styled";
import { animateScroll as scroll } from "react-scroll";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [stickyNav, setStickyNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // Height
  const stickyNavFunction = () => {
    if (window.scrollY >= 510) {
      setStickyNav(true);
    } else {
      setStickyNav(false);
    }
  };

  window.addEventListener("scroll", stickyNavFunction);

  const toTop = () => {
    scroll.scrollToTop({ delay: 0, duration: 0 });
  };

  // mobile toggle
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledNavbar className={stickyNav ? "sticky" : ""}>
      <NavMenuList>
        <NavList>
          <StyledNavLinks
            to="home"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-85.26}
          >
            Home
          </StyledNavLinks>
        </NavList>
        <NavList>
          <StyledNavLinks
            to="about"
            smooth={true}
            duration={0}
            delay={0}
            sp
            y={true}
            spyThrottle={0}
            exact="true"
            offset={-85.26}
          >
            About
          </StyledNavLinks>
        </NavList>
        <NavList>
          <StyledNavLinks
            to="skills"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-85.26}
          >
            Skills
          </StyledNavLinks>
        </NavList>
        <NavList>
          <StyledNavLinks
            to="projects"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-85.26}
          >
            Projects
          </StyledNavLinks>
        </NavList>
        <NavList>
          <StyledNavLinks
            to="contactme"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-85.26}
          >
            Contact me
          </StyledNavLinks>
        </NavList>
      </NavMenuList>
      <StyledCTA
        href="mailto:yadavsandeep775@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <span>
          <span>get in touch</span>
        </span>
      </StyledCTA>

      <Menu onClick={toggle}>
        <Line width="1.5rem" />
        <Line />
        <Line width="1.5rem" ml="0.5rem" />
      </Menu>

      <MobileMenu isOpen={isOpen} toggle={toggle}></MobileMenu>
    </StyledNavbar>
  );
};

export default Navbar;
