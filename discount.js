// buy <= 100 pics - price 100 per pice
// buy <= 200 pic - 90 tk per peice
// buy > 200  pic - 70 tk per peice

function discountedPrice(quantity) {
  if (quantity <= 100) {
    const cost = quantity * 100;
    return cost;
  } else if (quantity <= 200) {
    const cost = quantity * 90;
    return cost;
  } else {
    const cost = quantity * 70;
    return cost;
  }
}

const totalCost = discountedPrice(201);
console.log("Total discounted price is = ", totalCost);
