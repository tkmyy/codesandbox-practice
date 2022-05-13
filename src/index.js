/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
const val1 = 1 > 0 ? "trueです" : "falseです";
console.log(val1);

const num1 = 1300;
console.log(num1.toLocaleString());

const num2 = "1300";
const formattedNum =
  typeof num2 === "number" ? num2.toLocaleString() : "数値を入力してください";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
};
console.log(checkSum(50, 40));
console.log(checkSum(50, 60));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log("1か2はtrueになります");
}
if (flag1 && flag2) {
  console.log("1か2はtrueになります");
}

// || は左側がfalseなら右側を返す
const num3 = null;
const fee = num3 || "金額未設定です";
console.log(fee);

// && は左側がtrueなら右側が返す
const num4 = 100;
const fee2 = num4 && "何か設定されました";
console.log(fee2);
