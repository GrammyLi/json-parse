// 引入 Token 类所需的 TokenType
const Type = {
  auto: 0, // auto 的时候, c 是 : , { } [] 其中之一, 要自己判断
  colon: 1, // :
  comma: 2, // ,
  braceLeft: 3, // {
  braceRight: 4, // }
  bracketLeft: 5, // [
  bracketRight: 6, // ]
  keyword: 7, // true false null
  number: 8, // 123
  string: 9, // "name"
};

class Token {
  constructor(token_type, value) {
    const d = {
      ":": Type.colon,
      ",": Type.comma,
      "{": Type.braceLeft,
      "}": Type.braceRight,
      "[": Type.bracketLeft,
      "]": Type.bracketRight,
    };

    if (token_type === Type.auto) {
      this.type = d[value];
    } else {
      this.type = token_type;
    }
    this.value = value;
  }

  toString() {
    return `type: ${this.type}, len: ${String(this.value).length}, value: "${
      this.value
    }"`;
  }
}
