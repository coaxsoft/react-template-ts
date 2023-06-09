// pages
import Home from "../../pages/Home";

// helpers
import { render } from "../utils/render";


describe("tests for the Home page", () => {
  it("should render the Home page", () => {
    const { getByTestId } = render(<Home />);

    expect(getByTestId("home-page")).toBeInTheDocument();
  });
});
