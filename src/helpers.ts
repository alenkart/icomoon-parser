import * as fs from "fs/promises";
import { IconMoon, Icons } from "./types";

/**
 * @param filename - input path.
 * @param path - output path
 */
export async function parseIcons(filename: string, path: string) {
  const icons = await readFile(filename);

  generateTypes(icons, path);
  generateJson(icons, path);
}

export async function readFile(filename: string) {
  const raw = await fs.readFile(filename, { encoding: "utf8" });

  const { selection = [], icons = [] } = JSON.parse(raw) as IconMoon;

  return selection.map((item, index) => ({
    name: item.name,
    paths: icons[index].paths,
  }));
}

export async function generateTypes(icons: Icons = [], path: string) {
  const iconNames = icons.map((icon) => `'${icon.name}'`);
  const content = ["export type IconName =", ...iconNames].join("\n  | ");

  await fs.writeFile(`${path}/icons.ts`, content);
}

export async function generateJson(icons: Icons = [], path: string) {
  const content = JSON.stringify(icons, null, 2);

  await fs.writeFile(`${path}/icons.json`, content);
}
