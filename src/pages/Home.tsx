import React from 'react';
import styled, { keyframes } from 'styled-components';
// import { FaChurch, FaCalendarAlt, FaHandsHelping, FaVideo } from 'react-icons/fa';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import UpcomingEvents from '../components/UpcomingEvents';
import LiveStream from '../components/Livestream';
import Ministries from '../components/Ministries';
import Testimonials from '../components/Testimonials';
import WelcomeContent from '../components/WelcomeContent';


const HomeContainer = styled.div`
  font-family: 'Arial', sans-serif;
`;

const Section = styled.section`
  padding: 4rem 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #003366;
  text-align: center;
  margin-bottom: 2rem;
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const AnimatedSection = styled(Section)`
  animation: ${fadeIn} 1s ease-in;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Hero />
      <Stats />
      <AnimatedSection>
        <SectionTitle>Welcome to Our Church</SectionTitle>
        <WelcomeContent />
      </AnimatedSection>
      <AnimatedSection>
        <SectionTitle>Upcoming Events</SectionTitle>
        <UpcomingEvents />
      </AnimatedSection>
      <AnimatedSection>
        <SectionTitle>Live Stream</SectionTitle>
        <LiveStream />
      </AnimatedSection>
      <AnimatedSection>
        <SectionTitle>Our Ministries</SectionTitle>
        <Ministries />
      </AnimatedSection>
      <AnimatedSection>
        <SectionTitle>Testimonials</SectionTitle>
        <Testimonials />
      </AnimatedSection>
    </HomeContainer>
  );
};

export default Home;