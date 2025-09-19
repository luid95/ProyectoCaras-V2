import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header Component", () => {
  test("renders logo, title and subtitle", () => {
    render(<Header />);

    expect(screen.getByAltText(/logo CARAS/i)).toBeInTheDocument();
    expect(screen.getByText(/Revista CARAS/i)).toBeInTheDocument();
    expect(screen.getByText(/Tu fuente de inspiración/i)).toBeInTheDocument();
  });
});
