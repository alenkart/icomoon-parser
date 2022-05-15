import { parseIcons } from "./helpers";

const [input, output] = process.argv.slice(2);

if (!input) {
  throw new Error("Input path is undefined");
}

if (!output) {
  throw new Error("Output path is undefined");
}

parseIcons(input, output);
