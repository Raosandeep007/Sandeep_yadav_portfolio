import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "../../assets/my_image.jpg";
import downloadIcon from "../../assets/icons/download-icon.svg";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true">About Me</SectionTitle>
      </SectionHeading>

      <AboutContent>
        <AboutImage src={myImage} />
        <AboutDetailsContainer>
          <StyledParagraph>
            I am a keen web enthusiast who loves to build complex systems and
            aspires to be a full stack web developer in the coming years.I have
            been able to utilize my skills by working on projects and honing my
            punctuality and work discipline at the same time. A very curious and
            self-motivated person, I am looking forward to learning about new
            technology and working in an energetic organization.
          </StyledParagraph>
          <StyledParagraph>
            I am a team player, a professional and self motivated individual
            adept at HTML, CSS, JavaScript, MERN Stack and DSA.
          </StyledParagraph>
          <StyledParagraph>
            My leisure interests: Apart from this I like Boxing, badminton and
            playing chess.
          </StyledParagraph>
          <Resume>
            <ResumeLink
              download="Sandeep_yadav"
              href="https://drive.google.com/file/d/1NgEKA26lsLWcgWk8INbBt8hdYfC8UnAr/view?usp=sharing"
              target={"_blank"}
              icon={downloadIcon}
            >
              View Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
