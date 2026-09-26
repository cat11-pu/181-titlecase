// normalize.js：批量归一（基线：一律给空表）
import { normalizeWord } from "./case.js";

export function normalizeAll(words) {
  return { fixed: [], changed: 0, longest: 0 };
}
