import { render, screen, fireEvent } from "@testing-library/react";
import Searchbar from "./Searchbar";

describe("Searchbar component", () => {
  it("shows a dropdown to choose field of competence and input field for entering searchterms", () => {
    const searchterm = {
      competence: "",
      buzzwords: "",
    };

    const handleChange = jest.fn(() => {});
    render(<Searchbar searchterm={searchterm} onhandleChange={handleChange} />);
    expect(
      screen.getByRole("option", { name: /Choose field of competence/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: /Architecture and Engineering/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: /Agriculture and Food/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: /Arts and Entertainment/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", {
        name: /Business, Management and Administration/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: /Education and Training/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: /Education and Training/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: /Finance and Accounting/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: /Health and Medicine/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: /Law and Public Policy/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", {
        name: /Sales, Marketing and Communications/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: /Science and Technology/i })
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter skill or buzzword...")
    ).toBeInTheDocument();
  });

  it("should update buzzword value on change", () => {
    const searchterm = {
      competence: "",
      buzzwords: "test",
    };
    const setBuzzwordSearch = jest.fn((value) => {});

    const { queryByPlaceholderText } = render(
      <Searchbar searchterm={searchterm} onhandleChange={setBuzzwordSearch} />
    );
    const searchInput = queryByPlaceholderText("Enter skill or buzzword...");
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
  });
});
