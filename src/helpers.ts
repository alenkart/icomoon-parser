import * as fs from "fs/promises";
import * as path from "path";

import { IconMoon, Icons } from "./types";

export async function parseIcons(inputPath: string, outputPath: string = "") {
  try {
    if (!inputPath) {
      throw new Error("Input path is undefined");
    }

    if (!outputPath) {
      outputPath = inputPath;
    }

    const raw = await fs.readFile(inputPath, { encoding: "utf8" });

    const iconMoon = JSON.parse(raw) as IconMoon;
    const icons = mapIcons(iconMoon);

    await fs.writeFile(
      path.resolve(outputPath, "/types.ts"),
      generateTypes(icons)
    );

    await fs.writeFile(
      path.resolve(outputPath, "/icons.json"),
      generateJson(icons)
    );
  } catch (error) {
    console.log(error);
  }
}

export function mapIcons({ selection = [], icons = [] }: IconMoon) {
  return selection.map((item, index) => ({
    name: item.name,
    paths: icons[index].paths,
  }));
}

export function generateTypes(icons: Icons) {
  const iconNames = icons.map((icon) => `'${icon.name}'`);
  return ["export type IconName =", ...iconNames].join("\n  | ");
}

export function generateJson(icons: Icons) {
  return JSON.stringify(icons, null, 2);
}
