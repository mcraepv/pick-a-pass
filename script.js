// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//begins by checking for character types
function generatePassword() {
  var lower = confirm("Should your password contain lowercase letters?");
  var upper = confirm("Should your password contain uppercase letters?");
  var numbers = confirm("Should your password contain numbers?");
  var special = confirm("Should your password contain special characters?");
  //defines character types
  var characters = '';
  var charNumbers = "1234567890";
  var charLower = "abcdefghijklmnopqrstuvwxyz";
  var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charSpecial = " /'\"!#$%&)(*+,-.:;<>=?@[]\\^_~`{|}"

  //checks that at least 1 character type is true
  while (lower === false && upper === false && numbers === false && special === false) {
    alert("Please choose at least one character type")
    var lower = confirm("Should your password contain lowercase letters?");
    var upper = confirm("Should your password contain uppercase letters?");
    var numbers = confirm("Should your password contain numbers?");
    var special = confirm("Should your password contain special characters?");
  };

  var length = prompt("How long should your password be (Please choose a character length between 8 and 128.)");

  //checks that password length is within limits
  while (length < 8 || length > 128) {
    alert("Please choose a character length between 8 and 128.");
    var length = prompt("How long should your password be (Please choose a character length between 8 and 128.)");
  };
  //checks which character types user selected
  if (lower === true) {
    characters += charLower;
  };
  if (upper === true) {
    characters += charUpper;
  };
  if (numbers === true) {
    characters += charNumbers;
  };
  if (special === true) {
    characters += charSpecial;
  };
  var charLength = characters.length;
  var output = '';

  //generates password randomly from selected character types
  for (var i = 0; i < length; i++) {
    output += characters.charAt(Math.floor(Math.random() * charLength));
  };
  return output;
};
