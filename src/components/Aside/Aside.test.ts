import Aside from "./Aside.js";

describe("Given the instance Aside", () => {
  describe("When it has a container that groups several elements inside", () => {
    test("Then it should show in the screen an aside tag component", () => {
      const screen = document.createElement("div");

      const aside = new Aside(screen, "aside");
      aside.render();

      const queryAside = screen.querySelector(".aside");

      expect(queryAside).not.toBeNull();
    });
  });
});
