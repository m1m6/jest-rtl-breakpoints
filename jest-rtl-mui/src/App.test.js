import { render, screen } from "@testing-library/react";
import MyApp from "./App";
import mediaQuery from "css-mediaquery";

function createMatchMedia(width) {
  return (query) => {
    return {
      matches: mediaQuery.match(query, { width }),
      media: "",
      addListener: () => {},
      removeListener: () => {},
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true,
    };
  };
}

function resizeScreenSize(width) {
  window.matchMedia = createMatchMedia(width);
}

describe("App Component", () => {
it("renders correctly on mobiles screens", () => {
  // Set the screen size to a smaller value
  resizeScreenSize(400);

  // Render the component
  render(<MyApp />);

  // Verify that the component styles are correct for the default screen size
  const pElement = screen.getByText("Hello Mobile");
  expect(pElement).toBeInTheDocument();
});

  it("renders correctly on tablets screens", () => {
    // Set the screen size to a smaller value
    resizeScreenSize(600);

    // Render the component
    render(<MyApp />);

    // Verify that the component styles are correct for the default screen size
    const pElement = screen.getByText("Hello Tablet");
    expect(pElement).toBeInTheDocument();
  });

  it("renders correctly on desktop screens", () => {
    // Set the screen size to a smaller value
    resizeScreenSize(900);

    // Render the component
    render(<MyApp />);

    // Verify that the component styles are correct for the default screen size
    const pElement = screen.getByText("Hello Desktop");
    expect(pElement).toBeInTheDocument();
  });
});
