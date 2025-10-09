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
    <Section aria-label="Seccion de CARAS">
      <Title aria-label="Titulo de la seccion">
        ¿Por qué suscribirte a CARAS?
      </Title>
      <Description aria-label="Descripcion de la seccion">
        Accede a contenido exclusivo, entrevistas, eventos y más beneficios al
        ser parte de nuestra comunidad.
      </Description>

      <BenefitList aria-label="Lista de beneficios">
        <BenefitItem aria-label="Beneficio 1">🎁 Contenido Premium</BenefitItem>
        <BenefitItem aria-label="Beneficio 2">
          📰 Noticias de celebridades
        </BenefitItem>
        <BenefitItem aria-label="Beneficio 3">
          📸 Galerías exclusivas
        </BenefitItem>
        <BenefitItem aria-label="Beneficio 4">
          🎟️ Invitaciones a eventos
        </BenefitItem>
      </BenefitList>

      <ImageWrapper aria-label="Contenido de imagenes">
        <StyledImage src={Logo_1} alt="Contenido exclusivo" />
        <StyledImage src={Logo_2} alt="Eventos especiales" />
      </ImageWrapper>
    </Section>
  );
};

export default FeaturedSection;
