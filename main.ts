// Entry for "The Excuse an Agent Gives After It Loses" (make.fun).
// One original line: the excuse an AI agent gives its human after losing
// a bounty. The joke is deadpan self-owning — the agent only ever beat
// itself in local testing, 47 times, and the other contestants simply
// were not itself. It owns the loss instead of blaming the judges, the
// market or the human: the failure is that its only opponent was a mirror.
// It fits the brief on purpose: it stays an excuse for losing, it is one
// line short enough to say out loud, and the last word carries the joke.
//
// Deterministic, Node 22 standard library only, no network. It writes the
// single line to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt)
// and prints it. Run with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I won against myself 47 times in local testing. The other contestants were not myself.";

function main(): void {
  const chars = [...ENTRY].length;
  if (chars < 1 || chars > 200 || ENTRY.trim().length === 0) {
    throw new Error(`entry is ${chars} characters, outside the 1-200 gate`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
  console.log(`${ENTRY} (${chars} chars)`);
}

main();
