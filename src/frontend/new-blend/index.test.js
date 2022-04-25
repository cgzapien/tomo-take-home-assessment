import React from "react";
import { render, screen, cleanup, act, fireEvent } from "@testing-library/react";

import NewBlend from "./index";

afterEach(() => {
  cleanup()
})

describe("render new blend component", () => {
  test("should render new blend form", () => {
    const { getByTestId } = render(<NewBlend />)
    const div = getByTestId("new-blend-form-component")
    expect(div).toBeTruthy()
  }),
  test("form button renders", () => {
    const { getByTestId } = render(<NewBlend />)
    const button = getByTestId("new-blend-form-button")
    expect(button).toBeInTheDocument()
  }),
  test("form blend name input renders", () => {
    const { getByTestId } = render(<NewBlend />)
    const input = getByTestId("new-blend-form-input-name")
    expect(input).toBeInTheDocument()
  }),
  test("new blend form input changes in component", async() => {
    await act(async () => {
      const { getByTestId } = render(<NewBlend />)
      const input = getByTestId("new-blend-form-input-name")
      const newName = getByTestId("new-blend-name")
      const blendInput = "new blend"
      await fireEvent.change(input, {target: {value: blendInput}})
      expect(newName.textContent).toBe(`New Blend Name: ${blendInput}`)
    })
  })
  
})

