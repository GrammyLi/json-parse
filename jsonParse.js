/**
 * 从 Token 列表中解析出 JSON 对象或数组。
 *
 * @param {Token[]} ts - 要解析的 Token 列表。
 * @returns {object|array} - 解析结果，可能是 JSON 对象或数组。
 */
const parse = (ts) => {
  const t = ts[0];
  ts.shift();

  if (t.type === Type.braceLeft) {
    const obj = {};
    while (ts[0].type !== Type.braceRight) {
      const k = ts[0];

      // 确保 k.type 必须是 string
      // 确保 _colon 必须是 colon
      ts.shift();
      ts.shift();

      const v = parse(ts);
      obj[k.value] = v.value || v;

      // 吃一个 逗号
      const _comma = ts[0];
      if (_comma.type === Type.comma) {
        ts.shift();
      }
    }

    // 结束 删除末尾的 '}'
    ts.shift();
    return obj;
  } else if (t.type === Type.bracketLeft) {
    const l = [];
    while (ts[0].type !== Type.bracketRight) {
      const v = parse(ts);

      // 吃一个 逗号
      const _comma = ts[0];
      if (_comma.type === Type.comma) {
        ts.shift();
      }

      l.push(v.value);
    }

    // 删除末尾的 ']'
    ts.shift();
    return l;
  } else {
    // console.log('value: ', t);
    return t;
  }
};
