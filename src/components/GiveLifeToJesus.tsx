import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import prayer from '../assets/prayer.jpg';
import pastorImg from '../assets/pastorImg.png';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const GiveLifeContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${prayer});
  background-size: cover;
  background-position: center;
  padding: 2rem;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const PastorImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    width: 40%;
    margin-bottom: 0;
  }
`;

const StepsContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    flex: 1;
    margin-left: 2rem;
  }
`;

const StepItem = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const StepHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const StepTitle = styled.h3`
  margin: 0;
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const StepDetails = styled(motion.p)`
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  line-height: 1.4;
`;

const steps = [
  {
    title: "Acknowledge all your sins Acts 2:36 - 38",
    details: "Reflect on your past actions and recognize areas where you've fallen short of God's standards. Therefore let all the house of Israel know assuredly, that God hath made the same Jesus, whom ye have crucified, both Lord and Christ. 37 Now when they heard this, they were pricked in their heart, and said unto Peter and to the rest of the apostles, Men and brethren, what shall we do? 38 Then Peter said unto them, Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy Ghost."
  },
  {
    title: "Confess those sins. Galatians 5:19 - 21",
    details: "Now the works of the flesh are manifest, which are these; Adultery, fornication, uncleanness, lasciviousness, 20 Idolatry, witchcraft, hatred, variance, emulations, wrath, strife, seditions, heresies, 21 Envyings, murders, drunkenness, revellings, and such like: of the which I tell you before, as I have also told you in time past, that they which do such things shall not inherit the kingdom of God."
  },
  {
    title: "Ask for forgiveness of sin . I John 1:9",
    details: "Sincerely ask God to forgive you for your sins, trusting in His mercy and grace."
  },
  {
    title: "Repent of those sins. Act 3:19",
    details: "Make a conscious decision to turn away from your sins and commit to following God's path."
  },
  {
    title: "Forsake all your old way and sinful habit Luke 14: 33",
    details: "Actively work to change your lifestyle, leaving behind habits and behaviors that don't align with God's will."
  },
  {
    title: "Join a Bible believing Church around. Hebrew 10:25",
    details: "Find a local church that teaches the Bible and become an active member of the community."
  }
];

const GiveLifeToJesus: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const toggleStep = (index: number) => {
    setActiveStep(activeStep === index ? null : index);
  };

  return (
    <GiveLifeContainer>
      <PastorImage src={pastorImg} alt="Pastor" />

      <StepsContainer>
        <h2>Give Your Life to Jesus</h2>
        {steps.map((step, index) => (
          <StepItem key={index}>
            <StepHeader onClick={() => toggleStep(index)}>
              <StepTitle>{step.title}</StepTitle>
              {activeStep === index ? <FaChevronUp /> : <FaChevronDown />}
            </StepHeader>
            <AnimatePresence>
              {activeStep === index && (
                <StepDetails
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.details}
                </StepDetails>
              )}
            </AnimatePresence>
          </StepItem>
        ))}
      </StepsContainer>
    </GiveLifeContainer>
  );
};

export default GiveLifeToJesus;