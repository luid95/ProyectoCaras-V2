import React from "react";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import twitter from "../../assets/icons/twiter.png";
import {
  FooterContainer,
  SocialLinks,
  SocialIcon,
  ContactInfo,
  Copyright,
} from "./styles";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon src={facebook} alt="Facebook" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <SocialIcon src={twitter} alt="Twitter" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon src={instagram} alt="Instagram" />
        </a>
      </SocialLinks>

      <ContactInfo>
        <p>Contacto: contacto@caras.com</p>
        <p>Tel: (55) 1234 5678</p>
      </ContactInfo>

      <Copyright>
        &copy; {new Date().getFullYear()} CARAS. Todos los derechos reservados.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
