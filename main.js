let t0 = `
{
  "s1": "xigua",
  "s2": "a\bb\fc\nd\re\tf\\/hi",
  "num1": 11,
  "bool": true,
  "null": null,
  "arr1": [1, 2, 3],
  "obj": {
      "bool2": false,
      "arr2": [4, 5, 6],
      "num2": 123
  }
}
`;
const ts = tokenList(t0);
console.log("ts", ts);

const o = parse(ts);
console.log("o", o);
