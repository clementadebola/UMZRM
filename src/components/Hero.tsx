import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const HeroContainer = styled.div`
  background-image: url('/path-to-your-background-image.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  position: relative;
  padding: 0 20px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5));
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
  animation: ${fadeIn} 1s ease-in;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
  animation: ${fadeIn} 1s ease-in 0.5s both;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #ff6600;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  transition: background-color 0.3s ease;
  animation: ${fadeIn} 1s ease-in 1s both;

  &:hover {
    background-color: #ff8533;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <Title>The Upon Mount Zion Revival Ministry</Title>
      <Subtitle>Jesus Christ the same yesterday, and today, and forever.</Subtitle>
      <Button>Join Us This Sunday</Button>
    </HeroContainer>
  );
};

export default Hero;