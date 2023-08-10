import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import { PAGE_MAIN_HEADER_ELEMENT_INNER_TEXT } from "../constants/pages/not_found_page/pageElementsInnerTextConstants";
import NotFound from "../../pages_container/NotFound";

describe("Test Domain Not Found Behavior", () => {
  test("Test If Elements Were Correctly Placed Correctly", () => {
    const { getAllByText } = render(<NotFound />);

    expect(getAllByText(PAGE_MAIN_HEADER_ELEMENT_INNER_TEXT)).toBeTruthy();
  });
});
