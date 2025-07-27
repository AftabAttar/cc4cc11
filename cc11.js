let age = 25;
function displayAge() {
  console.log("Current age (from displayAge):", age);
}

function changeAge() {
  age = 30;
  console.log("Updated age (inside changeAge):", age);
}
displayAge();
changeAge();
displayAge();
