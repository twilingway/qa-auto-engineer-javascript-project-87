#!/usr/bin/env node

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { program } = require("commander");

program
  .version("1.0.0")
  .description("Compares two configuration files and shows a difference.")
  .argument("<filepath1>")
  .argument("<filepath2>")
  .option("-f, --format <type>", "output format");

program.parse(process.argv);
