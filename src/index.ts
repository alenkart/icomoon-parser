import { parseIcons } from "./helpers";

const [inputPath, outputPath] = process.argv.slice(2);
parseIcons(inputPath, outputPath);
