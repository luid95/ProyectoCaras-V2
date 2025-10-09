import React from "react";
import logoCaras from "../../assets/img/Logo-Caras.png";
import { HeaderWrapper, Logo, Title, Subtitle } from "./styles.js";

const Header: React.FC = () => {
  return (
    <HeaderWrapper aria-label="Contenido de Header">
      <Logo src={logoCaras} alt="Logo CARAS" />
      <Title aria-label="Titulo de proyecto">Revista CARAS</Title>
      <Subtitle aria-label="Mensaje de proyecto">
        Tu fuente de inspiración y estilo de vida
      </Subtitle>
    </HeaderWrapper>
  );
};

export default Header;
