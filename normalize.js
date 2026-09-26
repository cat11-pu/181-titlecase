// normalize.js：批量归一（一次扫描，每词只处理一次）
import { normalizeWord } from "./case.js";

export function normalizeAll(words) {
  const list = Array.isArray(words) ? words : [];
  const fixed = new Array(list.length);
  let changed = 0;
  let longest = 0;
  for (let i = 0; i < list.length; i += 1) {
    const word = normalizeWord(list[i]);
    fixed[i] = word;
    if (word !== String(list[i]).trim()) {
      changed += 1;
    }
    if (word.length > longest) {
      longest = word.length;
    }
  }
  return { fixed: fixed, changed: changed, longest: longest };
}
