import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGlobe, FaUsers, FaChurch } from 'react-icons/fa';

const StatsContainer = styled.div`
  background: linear-gradient(135deg, #003366, #0066cc);
  color: white;
  padding: 3rem 0;

`;

const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

     @media (max-width: 768px) {
   flex-direction: column;
  }
`;

const countUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StatItem = styled.div`
  text-align: center;
  animation: ${countUp} 1s ease-out forwards;
  opacity: 0;
  margin: 1rem;

  &:nth-child(1) { animation-delay: 0.2s; }
  &:nth-child(2) { animation-delay: 0.4s; }
  &:nth-child(3) { animation-delay: 0.6s; }
`;

const StatIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StatLabel = styled.div`
  font-size: 1rem;
  text-transform: uppercase;
`;

const Stats: React.FC = () => {
  return (
    <StatsContainer>
      <StatsWrapper>
        <StatItem>
          <StatIcon><FaGlobe /></StatIcon>
          <StatNumber>197</StatNumber>
          <StatLabel>Countries & Territories</StatLabel>
        </StatItem>
        <StatItem>
          <StatIcon><FaUsers /></StatIcon>
          <StatNumber>9M+</StatNumber>
          <StatLabel>Members Worldwide</StatLabel>
        </StatItem>
        <StatItem>
          <StatIcon><FaChurch /></StatIcon>
          <StatNumber>50K+</StatNumber>
          <StatLabel>Parishes</StatLabel>
        </StatItem>
      </StatsWrapper>
    </StatsContainer>
  );
};

export default Stats;