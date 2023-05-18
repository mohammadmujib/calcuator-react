const arr = ["0", "2", "6", "+", "5", "6", "8", "-", "1", "2"];
const res = [];
let left = "";
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == "+" || arr[i] == "-") {
    res.push(Number(left));
    res.push(arr[i]);
    left = "";
    continue;
  }
  left += arr[i];
}
res.push(Number(left));
console.log(res);
