import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original office joke, written to be read aloud in one breath.
// True observation (standup meetings where nobody has anything new),
// surprising last word (the only thing anyone actually achieves is posture).
const JOKE =
  "Our daily standup is fifteen minutes of people standing up to announce they did nothing yesterday and plan to do nothing today — but with excellent posture.";

// The gate requires 1 to 200 characters: fail loudly instead of
// silently writing an entry the judge would never see.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${JOKE.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
