import styled from "styled-components";

export const HeaderWrapper = styled.header`
  text-align: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Logo = styled.img`
  max-width: 150px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 1rem 0 0.5rem;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.lightText};
`;
