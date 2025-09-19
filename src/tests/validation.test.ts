import { isValidEmail } from "../utils/validation";

describe("isValidEmail", () => {
  test("valid emails return true", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
  });
  test("invalid emails return false", () => {
    expect(isValidEmail("correo-invalido")).toBe(false);
  });
});
