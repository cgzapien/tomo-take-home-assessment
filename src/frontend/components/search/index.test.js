import React from "react";
import ReactDOM from "react-dom"
import { render, screen, cleanup } from "@testing-library/react";

import SearchSpices from "./index";

afterEach(() => {
  cleanup()
})


test("should render search form", () => {
  render(<SearchSpices/>);
  const searchform = screen.getByTestId("spice-search")
  expect(searchform).toBeInTheDocument();
})

