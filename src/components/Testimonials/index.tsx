import React from "react";
import {
  Section,
  Title,
  TestimonialList,
  TestimonialItem,
  UserName,
  Quote,
} from "./styles";

const Testimonials: React.FC = () => {
  return (
    <Section aria-label="Seccion de testimonios de suscriptores">
      <Title>Lo que dicen nuestros suscriptores</Title>

      <TestimonialList>
        <TestimonialItem>
          <Quote>
            "Gracias a CARAS me siento más conectado con el mundo de las
            celebridades y el entretenimiento."
          </Quote>
          <UserName>- Laura G.</UserName>
        </TestimonialItem>
        <TestimonialItem>
          <Quote>
            "El contenido exclusivo y los eventos son increíbles, ¡vale
            totalmente la pena!"
          </Quote>
          <UserName>- Carlos M.</UserName>
        </TestimonialItem>
        <TestimonialItem>
          <Quote>
            "Una experiencia premium que no encuentras en otros medios. Muy
            recomendado."
          </Quote>
          <UserName>- Mariana P.</UserName>
        </TestimonialItem>
      </TestimonialList>
    </Section>
  );
};

export default Testimonials;
