import { render, fireEvent } from "@testing-library/react";
import Buzzwords from "./Buzzwords";

describe("Buzzwords component", () => {
  it("should render two buzzwords if two buzzwords were added", () => {
    const buzzwords = ["finance", "taxes"];
    const { queryAllByTestId } = render(<Buzzwords buzzwords={buzzwords} />);
    expect(queryAllByTestId("buzzword")).toHaveLength(2);
  });

  it("should delete the last buzzword if the user presses backspace once", () => {
    const buzzwords = ["finance", "taxes"];
    const handleDeleteBuzzword = jest.fn((buzzword) => {});
    const { getByTestId } = render(
      <Buzzwords
        buzzwords={buzzwords}
        onDeleteLastBuzzword={handleDeleteBuzzword}
      />
    );

    const inputField = getByTestId("buzzword-input");
    fireEvent.keyDown(inputField, { key: "Backspace" });
    expect(handleDeleteBuzzword).toHaveBeenCalledWith("");
  });
});
