/**
 * 从字符串中提取数字的长度，从指定的偏移量开始。
 *
 * @param {string} s1 - 要解析的字符串。
 * @param {number} offset - 开始解析的位置。
 * @returns {number|undefined} - 返回数字的长度，或者如果解析错误则返回 undefined。
 */
const numberEnd = (s1, offset) => {
  // 定义包含数字字符的字符串
  const digits = "1234567890";
  // 从指定的偏移量开始逐字符检查
  for (let i = 0; i < s1.length - offset; i++) {
    const c = s1[offset + i];
    // 如果当前字符不是数字字符，则返回当前位置 i，即数字的长度
    if (!digits.includes(c)) {
      let value = parseInt(s1.slice(offset - 1, i + offset));
      return [value, i];
    }
  }
  // 如果无法解析数字，则输出错误消息并返回 undefined
  console.log("错误, 数字解析错误");
  return undefined;
};

/**
 * 从字符串中提取子字符串，直到遇到双引号结束，处理转义字符。
 *
 * @param {string} s1 - 要解析的字符串。
 * @param {number} offset - 开始解析的位置。
 * @returns {[string, number]|undefined} - 返回提取的子字符串和结束位置的数组，或者如果解析错误则返回 undefined。
 */
const stringEnd = (s1, offset) => {
  // 定义转义字符及其对应的映射关系
  const bs = {
    b: "\b",
    f: "\f",
    n: "\n",
    r: "\r",
    t: "\t",
    "/": "/",
    '"': '"',
    "\\": "\\",
  };

  // 初始化结果字符串和游标位置
  let res = "";
  let i = offset;

  // 从指定的偏移量开始逐字符检查
  while (i < s1.length) {
    const a = s1[i];

    // 如果遇到双引号，表示字符串结束，返回结果字符串和当前位置
    if (a === '"') {
      return [res, i];
    } else if (a === "\\") {
      // 如果遇到转义字符
      const b = s1[i + 1]; // 获取转义字符后的字符
      if (b in bs) {
        // 如果是合法的转义字符
        res += bs[b]; // 将转义字符替换为其映射的字符
        i += 2; // 跳过转义字符和其后面的字符
      } else {
        console.log("** 错误, 不合法的转义字符: " + a + b);
        const example = '\\b \\f \\n \\r \\t \\/ \\" \\\\';
        console.log("合法的转义字符是: " + example);
        return ["", -1]; // 返回空字符串和 -1 表示解析错误
      }
    } else {
      res += a; // 将当前字符添加到结果字符串中
      i += 1; // 移动游标位置到下一个字符
    }
  }

  // 如果字符串未能正确结束，则输出错误消息并返回 undefined
  console.log("错误, 字符串解析错误");
  return undefined;
};

/**
 * 检查给定的字符是否为空格字符（包括空格、制表符、换行符等）。
 *
 * @param {string} char - 要检查的字符。
 * @returns {boolean} - 如果字符是空格字符，则返回 true；否则返回 false。
 */
const isSpaces = (char) => {
  const spaces = " \b\f\n\r\t";
  return spaces.includes(char);
};

/**
 * 检查给定的字符是否是特定字符集合中的一个。
 *
 * @param {string} char - 要检查的字符。
 * @returns {boolean} - 如果字符是特定字符集合中的一个，则返回 true；否则返回 false。
 */
const isSpecialChar = (char) => {
  // 定义特定字符集合
  const specialChars = ":,[]{}";

  // 使用字符串的 includes 方法检查给定字符是否在特定字符集合中
  return specialChars.includes(char);
};

/**
 * 检查给定的字符是否是数字字符。
 *
 * @param {string} char - 要检查的字符。
 * @returns {boolean} - 如果字符是数字字符，则返回 true；否则返回 false。
 */
const isDigit = (char) => {
  // 定义包含数字字符的字符串
  const digits = "0123456789";

  // 使用字符串的 includes 方法检查给定字符是否在数字字符字符串中
  return digits.includes(char);
};

/**
 * 检查给定的字符是否是特定字符集合中的一个。
 *
 * @param {string} char - 要检查的字符。
 * @returns {boolean} - 如果字符是特定字符集合中的一个，则返回 true；否则返回 false。
 */
const isKeywordChar = (char) => {
  // 定义特定字符集合
  const keywordChars = "tfn";

  // 使用字符串的 includes 方法检查给定字符是否在特定字符集合中
  return keywordChars.includes(char);
};
