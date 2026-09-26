// app.js：渲染结果
import { normalizeWord } from "./case.js";
import { normalizeAll } from "./normalize.js";

export function render(spec) {
  const words = spec.words || [];
  const view = normalizeAll(words);
  const fixed = view.fixed || [];
  return { fixed: fixed, changed: view.changed || 0, count: fixed.length,
           longest: view.longest || 0 };
}
