import React from 'react';
import styled from 'styled-components';
import { FaCalendarAlt } from 'react-icons/fa';

const EventsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const EventCard = styled.div`
  background-color: #f8f8f8;
  border-radius: 10px;
  padding: 1.5rem;
  margin: 1rem;
  width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const EventIcon = styled.div`
  font-size: 2rem;
  color: #ff6600;
  margin-bottom: 1rem;
`;

const EventTitle = styled.h3`
  color: #003366;
  margin-bottom: 0.5rem;
`;

const EventDate = styled.p`
  color: #666;
  font-style: italic;
`;

const events = [
  { title: 'Sunday Service', date: 'Every Sunday, 10:00 AM' },
  { title: 'Bible Study', date: 'Every Wednesday, 7:00 PM' },
  { title: 'Youth Night', date: 'First Friday of the month, 6:00 PM' },
];

const UpcomingEvents: React.FC = () => {
  return (
    <EventsContainer>
      {events.map((event, index) => (
        <EventCard key={index}>
          <EventIcon>
            <FaCalendarAlt />
          </EventIcon>
          <EventTitle>{event.title}</EventTitle>
          <EventDate>{event.date}</EventDate>
        </EventCard>
      ))}
    </EventsContainer>
  );
};

export default UpcomingEvents;