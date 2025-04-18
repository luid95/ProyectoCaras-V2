import styled from "styled-components";

export const Section = styled.section`
  padding: 3rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.lightBackground};
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const BenefitList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`;

export const BenefitItem = styled.li`
  font-size: 1rem;
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const StyledImage = styled.img`
  width: 200px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
