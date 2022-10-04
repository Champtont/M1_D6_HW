let firstName = "Courtney ";
let middleName = "Jaye ";
let lastName = "Hampton-Thomas";
let fullName = firstName + middleName + lastName;
console.log("hello, my name is", fullName);
let myAge = 34;
let currentYear = 2022;
let myBirthYear = currentYear - myAge;
console.log("I was born in", myBirthYear);
document.getElementById("name").innerHTML =
  "Hello, my name is: " + fullName + "!";
document.getElementById("year").innerHTML =
  "I was born in " + myBirthYear + ".";
