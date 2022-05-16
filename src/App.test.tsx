/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/prefer-screen-queries */


import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
} from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

test("make sure I can submit a todo", async () => {
  const { getByPlaceholderText, getByTestId,findByText , debug} = render(<App />);

  const todoInput = getByPlaceholderText("todo...");
  const submitButton = getByTestId("submit-button");
  fireEvent.click(submitButton);

  fireEvent.change(todoInput,{target: {value:'adding'}})

  fireEvent.click(submitButton);
  await waitForElement(() => findByText('adding'))
  
  debug()
});
