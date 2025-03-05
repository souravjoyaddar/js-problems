const heights = [48, 70, 65, 90, 95, 10, 12, 15, 9, 49, 99, 88, 101];

function getMin(numbers) {
  let min = numbers[0];
  for (const num of numbers) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}

//driver code
const result = getMin(heights);
console.log("Min value as height is: ", result);
