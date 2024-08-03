import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  color: #003366;
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <Title>About Us</Title>
      <p>The Upon Mount Zion Revival Ministry is a global church dedicated to spreading the message of Jesus Christ. Our mission is to make heaven, to take as many people as possible with us, and to have a member of UMZRM in every family of all nations.</p>
      <p>Founded in 2010, we have grown to become a worldwide denomination with presence nationwide.</p>
    </AboutContainer>
  );
};

export default About;