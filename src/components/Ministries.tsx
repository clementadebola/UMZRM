import React from 'react';
import styled from 'styled-components';
import { FaHandsHelping } from 'react-icons/fa';

const MinistriesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const MinistryCard = styled.div`
  background-color: #f8f8f8;
  border-radius: 10px;
  padding: 1.5rem;
  margin: 1rem;
  width: 250px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const MinistryIcon = styled.div`
  font-size: 2rem;
  color: #ff6600;
  margin-bottom: 1rem;
`;

const MinistryTitle = styled.h3`
  color: #003366;
  margin-bottom: 0.5rem;
`;

const ministries = [
  { title: 'Children\'s Ministry' },
  { title: 'Youth Ministry' },
  { title: 'Women\'s Fellowship' },
  { title: 'Men\'s Fellowship' },
];

const Ministries: React.FC = () => {
  return (
    <MinistriesContainer>
      {ministries.map((ministry, index) => (
        <MinistryCard key={index}>
          <MinistryIcon>
            <FaHandsHelping />
          </MinistryIcon>
          <MinistryTitle>{ministry.title}</MinistryTitle>
        </MinistryCard>
      ))}
    </MinistriesContainer>
  );
};

export default Ministries;