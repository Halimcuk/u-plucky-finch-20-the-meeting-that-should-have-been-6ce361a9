// The Meeting That Should Have Been an Email — entry program.
// Writes one single-line joke to entry.txt in the output folder.
// The file holds exactly the entry text: no trailing newline, no second line.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Nobody read the deck before the meeting, so we spent an hour reading it aloud to each other, one slide at a time.";

const outDir =
  process.env.OUTPUT_DIR ??
  process.env.MAKEFUN_OUTPUT_DIR ??
  process.env.OUTPUT ??
  "output";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("Entry must be a single non-blank line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);
