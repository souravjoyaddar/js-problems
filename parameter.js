function square(num) {
  console.log("Value of num parameter is = ", num);
  const getSquare = num * num;
  console.log("Square of given mumber is = ", getSquare);
}
square(4);
square(11);

console.log("getSum function starts here.....");

function getSum(num1, num2) {
  const sum = num1 + num2;
  console.log("Sum of " + num1 + " and " + num2 + " is = ", sum);
}
getSum(5, 6);
