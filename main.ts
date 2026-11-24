import { writeFileSync } from "node:fs";

const entry =
  "ERROR E04: Toast jammed in slot 2. I ate your bread. I regret nothing. Unplug me before I do it again.";

// Gate: 1-120 characters, one line, not only whitespace, no leading/trailing
// whitespace, no control characters, no trailing newline in the output.
if (
  !/^[^\n]{1,120}$/.test(entry) ||
  entry.trim().length === 0 ||
  entry !== entry.trim() ||
  /[\u0000-\u001f\u007f]/.test(entry)
) {
  throw new Error("entry fails gate: must be 1-120 chars, single line, no surrounding whitespace");
}

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
writeFileSync(out, entry, "utf8");
