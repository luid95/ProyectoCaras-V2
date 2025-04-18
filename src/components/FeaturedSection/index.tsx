import React from "react";
import Logo_1 from "../../assets/img/Logo_1.png";
import Logo_2 from "../../assets/img/Logo_2.png";

import {
  Section,
  Title,
  Description,
  BenefitList,
  BenefitItem,
  ImageWrapper,
  StyledImage,
} from "./styles";

const FeaturedSection: React.FC = () => {
  return (
    <Section>
      <Title>¿Por qué suscribirte a CARAS?</Title>
      <Description>
        Accede a contenido exclusivo, entrevistas, eventos y más beneficios al
        ser parte de nuestra comunidad.
      </Description>

      <BenefitList>
        <BenefitItem>🎁 Contenido Premium</BenefitItem>
        <BenefitItem>📰 Noticias de celebridades</BenefitItem>
        <BenefitItem>📸 Galerías exclusivas</BenefitItem>
        <BenefitItem>🎟️ Invitaciones a eventos</BenefitItem>
      </BenefitList>

      <ImageWrapper>
        <StyledImage src={Logo_1} alt="Contenido exclusivo" />
        <StyledImage src={Logo_2} alt="Eventos especiales" />
      </ImageWrapper>
    </Section>
  );
};

export default FeaturedSection;
