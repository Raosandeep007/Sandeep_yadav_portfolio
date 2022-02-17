import React from "react";

import { Name, StyledHome, Title } from "../styles/Home.styled";
import "./style.css";

import { IconContext } from "react-icons";
import { IoIosCall, IoMdMail } from "react-icons/io";
import {
  SiLinkedin,
  SiGithub,
  SiMinutemailer,
  SiTwitter,
  SiPhonepe,
} from "react-icons/si";

const Home = () => {
  let today = new Date(),
    hour = today.getHours();

  return (
    <IconContext.Provider value={{ size: "1rem" }}>
      <StyledHome id="home">
        <Name>Sandeep Yadav</Name>
        <Title>Full Stack Web Developer</Title>
        <p>Specialization In MERN Stack</p>
        <div id="contactdiv">
          <a
            href="https://github.com/Raosandeep007"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sandeep-yadav-828779149/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin />
          </a>

          <a href="tel:9166250560">
            <IoIosCall />
          </a>
          <a href="mailto:yadavsandeep775@gmail.com">
            <IoMdMail />
          </a>
        </div>
      </StyledHome>
    </IconContext.Provider>
  );
};

export default Home;
