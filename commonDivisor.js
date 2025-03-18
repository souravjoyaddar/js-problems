// Find out the Numbers which are divided by 3 AND 5 from the range of 1 to 50.

const arr = [];
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    arr.push(i);
  }
}
console.log(arr);
