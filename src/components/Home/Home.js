import React from "react";

import { Name, StyledHome, Title } from "../styles/Home.styled";
import "./style.css";

import { IconContext } from "react-icons";

const Home = () => {
  let today = new Date(),
    hour = today.getHours();

  return (
    <IconContext.Provider value={{ size: "1rem" }}>
      <StyledHome id="home">
        <Name>Sandeep Yadav</Name>
        <Title>Full Stack Web Developer</Title>
        <p>Specialization In MERN Stack</p>
      </StyledHome>
    </IconContext.Provider>
  );
};

export default Home;
