import { mapIcons, generateTypes } from "./helpers";
import { IconMoon } from "./types";

describe("Tests the helpers functions", () => {
  it("Test the IcoMoon mapper", () => {
    const icoMoon: IconMoon = {
      selection: [{ name: "home" }, { name: "user" }],
      icons: [{ paths: ["home"] }, { paths: ["user"] }],
    };

    const iconMap = mapIcons(icoMoon);

    expect(iconMap["home"].paths).toEqual(icoMoon.icons[0].paths);
    expect(iconMap["user"].paths).toEqual(icoMoon.icons[1].paths);
  });

  it("Test the type parser", () => {
    const types = generateTypes({
      home: { paths: [] },
      user: { paths: [] },
    });

    expect(types).toEqual("export type IconName =\n  | 'home'\n  | 'user'");
  });
});
