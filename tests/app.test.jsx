import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../src/App";

import "@testing-library/jest-dom";

describe("App component", () => {
  it("renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
  });

  it("renders input field", () => {
    render(<App />);
    expect(screen.getByRole("usernameInput")).toBeInTheDocument();
  });
// Ok so we've successfully tested that these two elements exist.


});
