import assert from "node:assert";
import { normalizeWord } from "../case.js";
import { normalizeAll } from "../normalize.js";
import { render } from "../app.js";

let failed = 0;
function check(name, fn) {
  try { fn(); console.log("ok " + name); } catch (e) { failed += 1; console.log("FAIL " + name + " :: " + e.message); }
}

check("normalizeWord returns text", () => {
  assert.strictEqual(typeof normalizeWord("aB"), "string");
});

check("normalizeAll returns fixed list", () => {
  assert.ok(Array.isArray(normalizeAll(["aB"]).fixed));
});

check("normalizeAll returns changed count", () => {
  assert.strictEqual(typeof normalizeAll(["aB"]).changed, "number");
});

check("render counts words", () => {
  assert.strictEqual(typeof render({ words: ["aB"] }).count, "number");
});

check("render exposes longest", () => {
  assert.strictEqual(typeof render({ words: ["aB"] }).longest, "number");
});

console.log("5 cases, " + failed + " failed");
process.exit(failed === 0 ? 0 : 1);
