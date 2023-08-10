import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import Section from "../../../../components/index/section/Section";
import { PAGE_MAIN_HEADER_ELEMENT_INNER_TEXT } from "../../../constants/pages/index/pageElementsInnerTextConstants";

describe("Test Component Section Behavior", () => {
  test("Test If Elements Were Correctly Placed Correctly", () => {
    const { getAllByText } = render(<Section />);

    expect(getAllByText(PAGE_MAIN_HEADER_ELEMENT_INNER_TEXT)).toBeTruthy();
  });
});
