const student = {
  name: "Sourav Joyaddar",
  age: 27,
  cgpa: 3.25,
  isPassed: true,
};

for (let key in student) {
  console.log("key=", key, "value=", student[key]);
}
