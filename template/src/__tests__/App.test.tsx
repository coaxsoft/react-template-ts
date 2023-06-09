import { render } from "@testing-library/react";

// components
import App from "../App";


describe("tests for the App component", () => {
  it("should render the App component", () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId("react-root-component")).toBeInTheDocument();
  });
});
