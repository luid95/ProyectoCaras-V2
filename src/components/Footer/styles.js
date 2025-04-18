import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 2rem 1.5rem;
  text-align: center;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
  filter: brightness(0) invert(1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ContactInfo = styled.div`
  font-size: 0.9rem;
  margin-bottom: 1rem;

  p {
    margin: 0.2rem 0;
  }
`;

export const Copyright = styled.div`
  font-size: 0.8rem;
  opacity: 0.8;
`;
