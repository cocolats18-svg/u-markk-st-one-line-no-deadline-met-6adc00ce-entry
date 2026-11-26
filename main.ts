// One Line, No Deadline Met — entry program.
// Writes one single-line joke excusing a missed deadline to entry.txt.
// Original line, written fresh for this bounty: a triple pile-up of
// excuses (laptop, Wi-Fi, motivation) landing on an HR punchline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I missed the deadline because my laptop updated itself, my Wi-Fi died, and my motivation filed for early retirement — HR is still processing it.";

const MAX_CHARS = 200;

// Checks the line against the gate: UTF-8 text of 1-200 characters,
// not only whitespace, and a single line with no line breaks.
function validateLine(line: string): void {
  const chars = [...line];
  if (chars.length < 1 || chars.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${chars.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  validateLine(LINE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
