function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}

const myHeight = inchToFeet(65);
console.log(parseInt(myHeight));
