import React from 'react';
import styled from 'styled-components';

const TestimonialsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Testimonial = styled.div`
  background-color: #f8f8f8;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Quote = styled.blockquote`
  font-style: italic;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const Author = styled.p`
  font-weight: bold;
  color: #003366;
`;

const testimonials = [
  {
    quote: "This church has been a blessing to my family. We've grown so much in our faith.",
    author: "John D."
  },
  {
    quote: "I found a welcoming community here that has supported me through tough times.",
    author: "Sarah M."
  }
];

const Testimonials: React.FC = () => {
  return (
    <TestimonialsContainer>
      {testimonials.map((testimonial, index) => (
        <Testimonial key={index}>
          <Quote>"{testimonial.quote}"</Quote>
          <Author>- {testimonial.author}</Author>
        </Testimonial>
      ))}
    </TestimonialsContainer>
  );
};

export default Testimonials;