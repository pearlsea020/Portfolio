import React from 'react';
import styled from 'styled-components';
import Layout from '../layout/Layout';
import Nav from '../ui/Nav';

const StyledHero = styled.header`
  height: 570px;
  background: radial-gradient(
      ellipse at 103% 161%,
      #476fde 17%,
      rgba(255, 255, 255, 0) 40%
    ),
    linear-gradient(318deg, #f78ff0 0%, rgba(255, 255, 255, 0) 46%),
    linear-gradient(182deg, #d9deff 49%, rgba(255, 255, 255, 0) 79%),
    linear-gradient(243deg, #f1d1f8 0%, rgba(255, 255, 255, 0) 100%),
    linear-gradient(18deg, #ff9670 39%, rgba(255, 255, 255, 0) 100%),
    radial-gradient(
      circle at 104% 148%,
      #a0289d 39%,
      rgba(255, 255, 255, 0) 84%
    );
  color: #314354;
`;

const Title = styled.h1`
  color: #131339;
  margin-bottom: 1.75rem;
  font-size: 36px;
`;

const Hero = () => (
  <StyledHero>
    <div className="container">
      <Nav />
      <Title>Hello there</Title>
      <p role="doc-subtitle">
        Hello! I'm Pearlsea, a senior majoring in Computer Science at the Ohio State University, Columbus, OH. I'm a web developer with a budding interest in Cybersecurity and Software Architecture.
        I've worked several semesters as a teaching assistant since my very first year of university!<br/>
        To me, CS is a never-ending journey of learning and growth with its unique ability to create tangible impact on tremendous scales across various sectors and realms of our daily existence. 
        The versatility and problem-solving aspect of CS never fail to amaze me. I'm a curious learner. I'm continuously learning, falling, learning. 
        I believe there's something I learn from each person, every day of my life which helps me build a growth mindset.
      </p>
    </div>
  </StyledHero>
);

const HomePage: React.FC = () => (
  <Layout docTitle="Home | Pearlsea Jain" footerTheme="LIGHT">
    <Hero />
  </Layout>
);

export default HomePage;
