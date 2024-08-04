import React from 'react';
import styled from 'styled-components';
import background from '../assets/backview.jpeg'
import pastorImg from '../assets/pastorImg.png';

const SectionWrapper = styled.section`
  position: relative;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  padding: 40px;
  color: white;
  height: 300px; // Adjust as needed
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #c5ff00;
  margin-bottom: 20px;
  max-width: 70%;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
  max-width: 60%;
`;

const ContactButton = styled.button`
  background-color: #ffa500;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
`;

const PastorImageWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 40%;
  height: 100%;
  overflow: hidden;
`;

const PastorImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100%;
  object-fit: cover;
`;

const TextFadeOverlay = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%);
  z-index: 1;
`;

const ChatIcon = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  background-color: #25D366;
  color: white;
  padding: 10px;
  border-radius: 50%;
  z-index: 3;
`;

const ChallengeSection: React.FC = () => {
  return (
    <SectionWrapper>
      <ContentWrapper>
        <Title>You Can Talk to Someone no matter what the challenge is.</Title>
        <Subtitle>
          There are competent & Spirit filled Counsellors, Pastors & Ministers willing to speak with you at any time.
        </Subtitle>
        <Subtitle>Don't keep it all in, speak to someone now.</Subtitle>
        <ContactButton>Contact Us</ContactButton>
      </ContentWrapper>
      <PastorImageWrapper>
        <PastorImage src={pastorImg} alt="Pastor speaking" />
      </PastorImageWrapper>
      <TextFadeOverlay />
      <ChatIcon>
        {/* Add chat icon here */}
      </ChatIcon>
    </SectionWrapper>
  );
};

export default ChallengeSection;