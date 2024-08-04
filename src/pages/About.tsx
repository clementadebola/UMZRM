import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaChurch, FaHeart, FaCross, FaPrayingHands } from 'react-icons/fa';
import backview from '../assets/backView.jpeg';
import logo from '../assets/logo.png';

const AboutContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const HeroSection = styled.div`
  height: 50vh;
  background-image: url(${backview});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 2rem;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const SectionTitle = styled.h2`
  color: #003366;
  margin-bottom: 1rem;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
`;

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const IconBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <HeroSection>
        <HeroTitle
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Us
        </HeroTitle>
      </HeroSection>

      <Section>
        <SectionTitle>Our Story</SectionTitle>
        <FlexContainer>
          <div>
            <p>Upon Mount Zion Revival Ministry (UMZRM) is a global church dedicated to spreading the message of Jesus Christ. Our mission is to make heaven, to take as many people as possible with us, and to have a member of UMZRM in every family of all nations.</p>
            <p>Founded in 2010, we have grown to become a worldwide denomination with presence nationwide. Our journey began with a small group of believers who shared a vision of revival and spiritual awakening.</p>
          </div>
          <Logo src={logo} alt="UMZRM Logo" />
        </FlexContainer>
      </Section>

      <Section>
        <SectionTitle>Our Values</SectionTitle>
        <IconGrid>
          <IconBox whileHover={{ scale: 1.1 }}>
            <FaChurch size={48} color="#003366" />
            <h3>Community</h3>
            <p>Building strong, supportive relationships</p>
          </IconBox>
          <IconBox whileHover={{ scale: 1.1 }}>
            <FaHeart size={48} color="#003366" />
            <h3>Love</h3>
            <p>Showing God's love to all people</p>
          </IconBox>
          <IconBox whileHover={{ scale: 1.1 }}>
            <FaCross size={48} color="#003366" />
            <h3>Faith</h3>
            <p>Trusting in God's plan and purpose</p>
          </IconBox>
          <IconBox whileHover={{ scale: 1.1 }}>
            <FaPrayingHands size={48} color="#003366" />
            <h3>Prayer</h3>
            <p>Connecting with God through prayer</p>
          </IconBox>
        </IconGrid>
      </Section>

      <Section>
        <SectionTitle>Join Us</SectionTitle>
        <p>We welcome you to join our community and experience the love of Christ. Our doors are open to all, regardless of your background or where you are in your spiritual journey.</p>
        <p>Sunday Service: 10:00 AM</p>
        <p>Wednesday Bible Study: 7:00 PM</p>
        <p>Address: 123 Church Street, City, State, ZIP</p>
      </Section>
    </AboutContainer>
  );
};

export default About;