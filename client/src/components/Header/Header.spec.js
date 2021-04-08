import { render } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("Header component", () => {
  it("should render a headline", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header headline="headline text" />
      </BrowserRouter>
    );
    expect(getByText("headline text")).toBeInTheDocument();
  });

  it("should show three icons(burgermenu, favourite & search)", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(getByTestId("search")).toBeInTheDocument();
    expect(getByTestId("favourites")).toBeInTheDocument();
    expect(getByTestId("burgermenu")).toBeInTheDocument();
  });
});
