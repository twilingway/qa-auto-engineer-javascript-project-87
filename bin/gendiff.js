#!/usr/bin/env node

import { createRequire } from "module";
import genDiff from "../src/index.js";

const require = createRequire(import.meta.url);
const { program } = require("commander");

program
  .version("1.0.0")
  .description("Compares two configuration files and shows a difference.")
  .argument("<filepath1>")
  .argument("<filepath2>")
  .option("-f, --format <type>", "output format")
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2));
  });

program.parse(process.argv);
