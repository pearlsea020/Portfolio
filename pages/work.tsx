import React from 'react';
import styled from 'styled-components';
import Layout from '../layout/Layout';
import Nav from '../ui/Nav';

const StyledHero = styled.header`
  height: 320px;
  /* background-color: #110F21; */
  background: conic-gradient(from -90deg at bottom center, papayawhip, peachpuff);
  color: #314354;
`;

const Hero = () => (
  <StyledHero>
    <div className="container">      
      <Nav />
      <h1>My Work</h1>
    </div>
  </StyledHero>
);

const ProjectSection = styled.section`
  padding: 50px 0;

  h2 {
    font-size: 18px;
  }
`;

const Projects = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 48%;
  padding: 32px;
  box-shadow: 0px 8px 18px rgb(25 25 25 / 0.1);
  margin-bottom: 30px;

  @media (max-width: 700px) {
    width: 100%;
  }

  h3, p, a {
    font-size: 16px;
  }

  a {
    margin-top: auto;
  }

  h3 {
    margin-bottom: 8px;
  }

  a {
    display: inline-block;
    text-align: center;
    width: 100px;
    height: 40px;
    line-height: 38px;
    border: 1px solid #303030;
    color: #303030;
    transition: all 0.25s;

    &:hover {
      color: #fff;
      background: #303030;
    }
  }
`;

const WorkPage = () => (
  <Layout docTitle="Work | Pearlsea Jain" footerTheme="DARK">
    <Hero />
    <ProjectSection className="container">
      <h2>Personal Projects</h2>
      <Projects>
         <Project>
          <h3>Travelocracy</h3>
          <p>A landing page for a mock travel agency allowing users to submit quote requests which are then available to view on the admin side. </p>
          <a href="https://momo-travel.vercel.app/" target="_blank" rel="noreferrer">Open</a>
        </Project>
         <Project>
          <h3>Enigma</h3>
          <p>Java Implementation of the WWII German encryption machine that parses and tokenizes input with various permutations to encode and decode messages. </p>
          <a target="_blank" rel="noreferrer">Open</a>
        </Project>
        <Project>
          <h3>Beach Resort Application</h3>
          <p>Interactive website that lets user browse and book luxury hotel rooms. </p>
          <a href="https://beach-resort-reservation-react.netlify.app/" target="_blank" rel="noreferrer">Open</a>
        </Project>
        <Project>
          <h3>Online Chat Room</h3>
          <p>Web Application that allows friends to chat online, create group chats and more. </p>
          <a href="https://github.com/pearlsea020/Chat-Application" target="_blank" rel="noreferrer">Open</a>
        </Project>    
     
      </Projects>
    </ProjectSection>    
  </Layout>
);

export default WorkPage;
