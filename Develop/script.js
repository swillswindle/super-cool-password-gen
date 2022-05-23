// Assignment Code
var generateBtn = document.querySelector("#generate");

//array of upper, lower, numeric, and special characters
var upper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "{",
  "}",
  "[",
  "]",
  "|",
  ":",
  ";",
  '"',
  "'",
  ",",
  "<",
  ".",
  ">",
  "/",
  "?",
];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  alert("Choose character types to include in your password");
  let up = confirm("Would you like to include uppercase letters?");
  let low = confirm("Would you like to include lowercase letters?");
  let num = confirm("Would you like to include numbers?");
  let spec = confirm("Would you like to include special characters?");
  let length = prompt("How long would you like your password to be?");

  if (up === false && low === false && num === false && spec === false) {
    alert("You must choose at least one character type");
    return;
  }
  if (length < 8 || length > 128) {
    alert("Password must be between 8 and 128 characters");
    return;
  }
  let password = "";
  let charTypes = [];
  let x = 0;
  if (up) {
    password += upper[Math.floor(Math.random() * upper.length)];
    charTypes.push(upper);
    x++;
  }
  if (low) {
    password += lower[Math.floor(Math.random() * lower.length)];
    charTypes.push(lower);
    x++;
  }
  if (num) {
    password += numeric[Math.floor(Math.random() * numeric.length)];
    charTypes.push(numeric);
    x++;
  }
  if (spec) {
    password += special[Math.floor(Math.random() * special.length)];
    charTypes.push(special);
    x++;
  }
  for (let i = x; i < length; i++) {
    let random = Math.floor(Math.random() * charTypes.length);
    password +=
      charTypes[random][Math.floor(Math.random() * charTypes[random].length)];
  }
  return password;
}
//easy peasy
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
