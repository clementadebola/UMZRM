import React from "react";
import styled, { keyframes } from "styled-components";
// import { FaChurch, FaCalendarAlt, FaHandsHelping, FaVideo } from 'react-icons/fa';
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import UpcomingEvents from "../components/UpcomingEvents";
import LiveStream from "../components/Livestream";
import Ministries from "../components/Ministries";
import Testimonials from "../components/Testimonials";
import WelcomeContent from "../components/WelcomeContent";
import GiveLifeToJesus from "../components/GiveLifeToJesus";
import SomeOneToTalkTo from "../components/SomeOneToTalkTo";

const HomeContainer = styled.div`
  font-family: "Arial", sans-serif;
`;

const Section = styled.section`
  padding: 4rem 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.7rem;
  color: #003366;
  text-align: center;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
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
        <SectionTitle>
          <h2>Welcome to Our Church</h2>
        </SectionTitle>
        <WelcomeContent />
      </AnimatedSection>
      <AnimatedSection>
        <SectionTitle>
          <h2>Give Your Life to Jesus</h2>
        </SectionTitle>
        <GiveLifeToJesus />
      </AnimatedSection>

      <AnimatedSection>
        <SectionTitle>
          <h2>Upcoming Events</h2>
        </SectionTitle>
        <UpcomingEvents />
      </AnimatedSection>
      <AnimatedSection>
        <SectionTitle>
          <h2>Live Stream</h2>
        </SectionTitle>
        <LiveStream />
      </AnimatedSection>
      <AnimatedSection>
        <SectionTitle>
          <h2>Our Ministries</h2>
        </SectionTitle>
        <Ministries />
      </AnimatedSection>
      <AnimatedSection>
        <SectionTitle>
          <h2>Someone To Talk To</h2>
        </SectionTitle>
        <SomeOneToTalkTo />
      </AnimatedSection>

      <AnimatedSection>
        <SectionTitle>
          <h2> Testimonials</h2>
        </SectionTitle>
        <Testimonials />
      </AnimatedSection>
    </HomeContainer>
  );
};

export default Home;
