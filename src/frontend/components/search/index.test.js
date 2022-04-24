import React from "react";
import ReactDOM from "react-dom"
import { render, screen, cleanup, act, fireEvent } from "@testing-library/react";

import SearchSpices from "./index";

afterEach(() => {
  cleanup()
})

describe("search form component", () => {
  test("should render search form", () => {
    render(<SearchSpices/>);
    const searchform = screen.getByTestId("spice-searchform")
    expect(searchform).toBeInTheDocument();
  })
 
  test("render input", () => {
    const { getByTestId } = render(<SearchSpices />)
    const input = getByTestId("search-input")
    expect(input).toHaveAttribute("type", "text")
    expect(input).toBeTruthy()
  })
  // test("change on input", async () => {
  //   await act(async () => {
  //     const { getByTestId } = render(<SearchSpices />)
  //     const input = getByTestId("spice-search")
  //     console.log('input: ', input);
  //     await fireEvent.change(input, {target: {value: 'adobo'}})
  //     expect(input.value).toBe('adobo')
  //   })
    
  // })
})

