import { render } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

describe("Header component", () => {
  it("should render a headline", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header headline="headline text" />
      </BrowserRouter>
    );
    expect(getByText("headline text")).toBeInTheDocument();
  });
});
