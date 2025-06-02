import fs from "fs";
import { parse } from "csv-parse/sync";

export function readCSV(path) {
  const fileContent = fs.readFileSync(path);
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  });
  return records;
}