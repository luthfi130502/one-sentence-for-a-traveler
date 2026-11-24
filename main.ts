// One sentence for a traveler from 1800, explaining the modern internet
// using only things their world already holds: the post road, the letter,
// and the library. The entrypoint writes that single sentence, unchanged,
// to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "Imagine a post road that reaches every house on Earth, where a letter arrives before its ink can dry, and beside it one great library holds every book ever written, open freely to all who ask.";

// The bounty gate: a single UTF-8 sentence of 1-200 characters.
// Guard it here so the entry can never silently drift out of spec.
const charCount = [...SENTENCE].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(`sentence is ${charCount} characters, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
