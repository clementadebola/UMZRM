import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  color: #003366;
`;

const ServiceItem = styled.div`
  margin-bottom: 1rem;
`;

const Services: React.FC = () => {
  const services = [
    { name: 'Sunday Service', time: '10:00 AM' },
    { name: 'Bible Study', time: 'Wednesday, 7:00 PM' },
    { name: 'Prayer Meeting', time: 'Friday, 7:00 PM' },
  ];

  return (
    <ServicesContainer>
      <Title>Our Services</Title>
      {services.map((service, index) => (
        <ServiceItem key={index}>
          <h3>{service.name}</h3>
          <p>Time: {service.time}</p>
        </ServiceItem>
      ))}
    </ServicesContainer>
  );
};

export default Services;