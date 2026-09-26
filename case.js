// case.js：归一个词
// 规则：去首尾空白；首字符是字母就大写、其余字母小写；
// 首字符不是字母就原样保留该字符、其后字母仍按小写处理；
// 非字母字符不删不换。逐字符处理保证结果长度等于去空白后的原长度。
function isLetter(ch) {
  return (ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z");
}

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
    if (!isLetter(ch)) {
      out += ch;
    } else if (i === 0) {
      out += ch.toUpperCase();
    } else {
      out += ch.toLowerCase();
    }
  }
  return out;
}
