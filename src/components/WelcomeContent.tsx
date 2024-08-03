import React from 'react';
import styled from 'styled-components';
import { FaChurch } from 'react-icons/fa';

const WelcomeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const WelcomeText = styled.div`
  flex: 1;
  padding-right: 2rem;
`;

const WelcomeImage = styled.img`
  flex: 1;
  max-width: 50%;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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