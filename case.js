// case.js：归一个词：去首尾空白；首字符是字母就大写、其余字母小写；
// 首字符不是字母就原样保留，其后字母仍小写。去空白后为空报 E_BAD_WORD。
export function normalizeWord(word) {
  const text = String(word).trim();
  if (text.length === 0) {
    const error = new Error("word is empty after trimming");
    error.code = "E_BAD_WORD";
    throw error;
  }
  let out = "";
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    if (/[a-zA-Z]/.test(ch)) {
      out += i === 0 ? ch.toUpperCase() : ch.toLowerCase();
    } else {
      out += ch;
    }
  }
  return out;
}
