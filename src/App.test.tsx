import { render } from "@testing-library/react";
import MyApp from "./App";
import mediaQuery from "css-mediaquery";

function createMatchMedia(width: number) {
  return (query: string): MediaQueryList => {
    console.log(query);

    return {
      matches: mediaQuery.match(query, { width }) as boolean,
      media: "",
      addListener: () => {},
      removeListener: () => {},
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true
    };
  };
}

function resizeScreenSize(width: number) {
  window.matchMedia = createMatchMedia(width);
}

describe("MyComponent", () => {
  // it("renders correctly on mobile screens", () => {
  //   // Set the screen size to a smaller value
  //   resizeScreenSize(499);
  //   // Render the component
  //   const { getByText } = render(<MyApp />);

  //   // Verify that the component styles are correct for the default screen size
  //   const pElement = getByText("Hello World");
  //   expect(getComputedStyle(pElement).backgroundColor).toBe("grey");
  // });

  it("renders correctly on tablets screens", () => {
    // Set the screen size to a smaller value
    // resizeScreenSize(600);
       // Set the screen size to a smaller value
       window.matchMedia = jest.fn().mockImplementation((query) => {
        return {
          matches: query.includes('(max-width: 601px)'),
          addListener: jest.fn(),
          removeListener: jest.fn(),
        };
      });

    // Render the component
    const { getByText } = render(<MyApp />);

    // Verify that the component styles are correct for the default screen size
    const pElement = getByText("Hello World");
    expect(getComputedStyle(pElement).backgroundColor).toBe("red");
  });
});
