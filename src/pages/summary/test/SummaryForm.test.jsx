import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

test("Initial state i.e. confirm order button is enable and term and condition checkbox is unchecked", () => {
  render(<SummaryForm />);
  const confirmOrderButton = screen.getByRole("button", {
    name: /confirm order/i,
  });
  const termAndConditionCheckbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  expect(termAndConditionCheckbox).not.toBeChecked();
  expect(confirmOrderButton).toBeDisabled();
});

test("confirm order button is disabled when term and condition checkbox is checked", () => {
  render(<SummaryForm />);
  const confirmOrderButton = screen.getByRole("button", {
    name: /confirm order/i,
  });
  const termAndConditionCheckbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  userEvent.click(termAndConditionCheckbox);
  expect(termAndConditionCheckbox).toBeChecked();
  expect(confirmOrderButton).toBeEnabled();
});

test("popover respond to hover", async () => {
  render(<SummaryForm />);
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  const termAndConditionText = screen.getByText(/terms and conditions/i);
  userEvent.hover(termAndConditionText);

  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  userEvent.unhover(termAndConditionText);
  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will actually be delivered/i)
  );
});
