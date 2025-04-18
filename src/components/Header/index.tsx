import React from "react";
import logoCaras from "../../assets/img/Logo-Caras.png";
import { HeaderWrapper, Logo, Title, Subtitle } from "./styles.js";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo src={logoCaras} alt="Logo CARAS" />
      <Title>Revista CARAS</Title>
      <Subtitle>Tu fuente de inspiración y estilo de vida</Subtitle>
    </HeaderWrapper>
  );
};

export default Header;
