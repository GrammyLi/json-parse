const formattedKeywowrd = (char) => {
  // true false null
  const kvs = {
    t: "true",
    f: "false",
    n: "null",
  };
  let value = kvs[char];
  const t = new Token(Type.keyword, value);
  return [t, value.length];
};

const tokenList = (code) => {
  let i = 0;
  const length = code.length;
  const tokens = [];

  let is_open = true;
  while (i < length) {
    const c = code[i];
    // console.log("ccccc", `(${c})`);
    i++;
    if (isSpaces(c)) {
      continue;
    } else if (isSpecialChar(c)) {
      const t = new Token(Type.auto, c);
      tokens.push(t);
    } else if (c === '"' && is_open) {
      // 吃字符串
      const [result, index] = stringEnd(code, i);

      if (index !== -1) {
        const t = new Token(Type.string, result);
        i = index;
        tokens.push(t);
        is_open = !is_open;
      }
    } else if (c === '"' && !is_open) {
      is_open = !is_open;
      continue;
    } else if (isDigit(c)) {
      // 吃数字
      const [value, offset] = numberEnd(code, i);
      const t = new Token(Type.number, value);
      i += offset;
      tokens.push(t);
    } else if (isKeywordChar(c)) {
      let [t, offset] = formattedKeywowrd(c);
      tokens.push(t);
      i += offset;
    } else {
      console.log("错误", c, code.slice(i, i + 10));
      return;
    }
  }

  return tokens;
};
