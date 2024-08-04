import React from 'react';
import styled from 'styled-components';
import { FaChurch } from 'react-icons/fa';

const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const WelcomeText = styled.div`
  flex: 1;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    padding-right: 2rem;
    margin-bottom: 0;
  }
`;

const WelcomeImage = styled.img`
  width: 100%;
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    max-width: 50%;
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #ff6600;
  margin-bottom: 1rem;
`;

const WelcomeContent: React.FC = () => {
  return (
    <WelcomeWrapper>
      <WelcomeText>
        <IconWrapper>
          <FaChurch />
        </IconWrapper>
        <h3>A Place to Belong</h3>
        <p>
          Welcome to Upon Mount Zion Revival Ministry. We are a community of believers
          dedicated to sharing God's love and spreading the message of Jesus Christ.
          Whether you're a long-time believer or just starting your spiritual journey,
          you'll find a warm and welcoming home here.
        </p>
      </WelcomeText>
      <WelcomeImage src="/path-to-welcome-image.jpg" alt="Church community" />
    </WelcomeWrapper>
  );
};

export default WelcomeContent;