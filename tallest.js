const heights = [48, 70, 65, 90, 95, 10, 12, 15, 49, 99, 88, 101];

function getMax(numbers) {
  let max = numbers[0];
  for (const num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

const result = getMax(heights);
console.log("Max value as height is: ", result);
