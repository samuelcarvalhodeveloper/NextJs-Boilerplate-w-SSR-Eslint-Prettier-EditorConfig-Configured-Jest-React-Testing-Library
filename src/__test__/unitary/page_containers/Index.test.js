import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import { PAGE_MAIN_HEADER_ELEMENT_INNER_TEXT } from "../../constants/pages/index/pageElementsInnerTextConstants";
import Index from "../../../pages_container/Index";

describe("Test Container Index Behavior", () => {
  test("Test If Elements Were Correctly Placed Correctly", () => {
    const { getAllByText } = render(<Index />);

    expect(getAllByText(PAGE_MAIN_HEADER_ELEMENT_INNER_TEXT)).toBeTruthy();
  });
});
