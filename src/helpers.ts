import * as fs from "fs/promises";
import * as path from "path";

import { IconMap, IconMoon } from "./types";

export async function parseIcons(inputPath: string, outputPath: string = ".") {
  try {
    if (!inputPath) {
      throw new Error("Input path is undefined");
    }

    const raw = await fs.readFile(inputPath, { encoding: "utf8" });

    const iconMoon = JSON.parse(raw) as IconMoon;
    const icons = mapIcons(iconMoon);

    await fs.writeFile(
      path.resolve(outputPath, "types.ts"),
      generateTypes(icons)
    );

    await fs.writeFile(
      path.resolve(outputPath, "icons.json"),
      generateJson(icons)
    );
  } catch (error) {
    console.log(error);
  }
}

export function mapIcons({ selection = [], icons = [] }: IconMoon) {
  return selection.reduce<IconMap>((map, current, index) => {
    map[current?.name || `i${current.order}`] = icons[index];
    return map;
  }, {});
}

export function generateTypes(iconMap: IconMap) {
  const iconNames = Object.keys(iconMap).map((name) => `'${name}'`);
  return ["export type IconName =", ...iconNames].join("\n  | ");
}

export function generateJson(iconMap: IconMap) {
  return JSON.stringify(iconMap, null, 2);
}
