import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SubscriptionForm from "../components/SubscriptionForm";

describe("SubscriptionForm Component", () => {
  test("renders name, email fields and submit button", () => {
    render(<SubscriptionForm />);

    expect(screen.getByPlaceholderText(/nombre/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/correo electrónico/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /suscribirme/i })
    ).toBeInTheDocument();
  });

  test("shows error alert when fields are empty", () => {
    render(<SubscriptionForm />);

    const button = screen.getByRole("button", { name: /suscribirme/i });
    global.alert = jest.fn(); // Mock alert
    fireEvent.click(button);

    expect(global.alert).toHaveBeenCalledWith(
      "Por favor, completa todos los campos."
    );
  });

  test("shows error alert when email is invalid", () => {
    render(<SubscriptionForm />);

    fireEvent.change(screen.getByPlaceholderText(/nombre/i), {
      target: { value: "Luis" },
    });
    fireEvent.change(screen.getByPlaceholderText(/correo electrónico/i), {
      target: { value: "correo-invalido" },
    });

    global.alert = jest.fn();
    fireEvent.click(screen.getByRole("button", { name: /suscribirme/i }));

    expect(global.alert).toHaveBeenCalledWith(
      "Por favor, ingresa un correo electrónico válido."
    );
  });

  test("shows success message when form is valid", () => {
    render(<SubscriptionForm />);

    fireEvent.change(screen.getByPlaceholderText(/nombre/i), {
      target: { value: "Luis" },
    });
    fireEvent.change(screen.getByPlaceholderText(/correo electrónico/i), {
      target: { value: "luis@test.com" },
    });

    fireEvent.click(screen.getByRole("button", { name: /suscribirme/i }));

    expect(screen.getByText(/¡gracias por suscribirte!/i)).toBeInTheDocument();
  });
});
