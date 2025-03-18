const friends = ["Andy", "Tomal", "Raichel", "Sabrina", "David", "Ross"];

let friendName = friends[0];
for (let i = 0; i < friends.length; i++) {
  if (friends[i].length > friendName.length) {
    friendName = friends[i];
  }
}
console.log(friendName);
