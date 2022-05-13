/**
 * テンプレート文字列
 */
const name = "takumi";
const age = 24;
// 「私の名前はtakumiです。年齢は24歳です。」

// 従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
console.log(message1);

// テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

// アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("func2です"));

const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(10, 20));
