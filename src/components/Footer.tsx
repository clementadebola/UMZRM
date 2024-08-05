import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #003366, #0066cc);
  color: white;
  padding: 3rem 0;
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterSection = styled.div`
  margin-bottom: 2rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  color: #ccc;
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #ff6600;
    animation: ${pulse} 0.5s ease-in-out;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink href="#">Home</FooterLink>
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Services</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Contact Us</FooterTitle>
          <FooterLink href="tel:+1234567890">+1 (234) 567-890</FooterLink>
          <FooterLink href="mailto:info@rccg.org">umzrm@gmail.com</FooterLink>
          <FooterLink href="#">akure, nigeria</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Connect With Us</FooterTitle>
          <SocialIcons>
            <SocialIcon href="#"><FaFacebook /></SocialIcon>
            <SocialIcon href="#"><FaTwitter /></SocialIcon>
            <SocialIcon href="#"><FaInstagram /></SocialIcon>
            <SocialIcon href="#"><FaYoutube /></SocialIcon>
          </SocialIcons>
        </FooterSection>
      </FooterWrapper>
      <Copyright>
        © {new Date().getFullYear()} Upon Mount Zion Revival Ministry. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
