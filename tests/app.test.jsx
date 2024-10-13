import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../src/App";

import Greeting from "../src/Greeting"

describe("App", () => {
  it("renders headline", () => {
    render(<App title="React" />);

    screen.debug();
    expect(screen.getAllByRole('heading').textContent).toMatch('Hello there!');
    // check if App components renders headline
  });
});

