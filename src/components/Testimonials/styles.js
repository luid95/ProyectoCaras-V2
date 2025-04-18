import styled from "styled-components";

export const Section = styled.section`
  padding: 3rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
`;

export const TestimonialList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

export const TestimonialItem = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBackground};
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Quote = styled.p`
  font-style: italic;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

export const UserName = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
`;
