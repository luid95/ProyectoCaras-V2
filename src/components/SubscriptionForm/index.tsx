import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  FormWrapper,
  Input,
  Button,
  Title,
  Subtitle,
  SuccessMessage,
} from "./styles";

const SubscriptionForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    if (name && email) {
      alert(
        `Nombre: ${name}\nCorreo: ${email}.\nSu subscripcion fue realizada satisfactoriamente.`
      );
      setSubmitted(true);
      setName("");
      setEmail("");
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Title>Suscríbete a CARAS</Title>
      <Subtitle>Recibe novedades y contenido exclusivo</Subtitle>

      <Input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={handleNameChange}
        required
      />
      <Input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <Button type="submit">Suscribirme</Button>

      {submitted && <SuccessMessage>¡Gracias por suscribirte!</SuccessMessage>}
    </FormWrapper>
  );
};

export default SubscriptionForm;
