// The Dog Ate My Homework: Funniest Excuse.
// The grader runs `node main.ts` with MAKEFUN_OUTPUT_DIR set. The entry is
// one line of under 200 characters, written to /output/entry.txt.
// No network, no randomness, no clock: the same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse, in the dog's own voice: an obedience loophole, zero guilt.
// The dog was never told NOT to eat the homework — it followed orders.
const EXCUSE =
  "You said 'sit' and 'stay' — nobody ever said 'don't eat the homework.' I followed orders perfectly.";

// The grader's output directory is the ONLY place this program writes.
// Never a relative path, never process.cwd(): the grading filesystem is
// read-only outside the output directory, so anything else fails the run.
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (outDir === undefined || outDir === "") {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
