import React from "react";
import ReactDOM from "react-dom"
import { render, screen, cleanup } from "@testing-library/react";

import SearchByHottness from "./index"

test("should render hotness form", () => {
  render(<SearchByHottness/>);
  const hotnessform = screen.getByTestId("hotness-form")
  expect(hotnessform).toBeInTheDocument();
})

