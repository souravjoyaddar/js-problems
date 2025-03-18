function getSum(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}
const result = getSum(2);
console.log("The result is: ", result);
