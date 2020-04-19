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

function generatePassword() {
  var lower = confirm("Should your password contain lowercase letters?");
  var upper = confirm("Should your password contain uppercase letters?");
  var numbers = confirm("Should your password contain numbers?");
  var special = confirm("Should your password contain special characters?");
  var length = prompt("How long should your password be (Please choose a character length between 8 and 128.)");

  while (length < 8 || length > 128) {
    alert("Please choose a character length between 8 and 128.");
    var length = prompt("How long should your password be (Please choose a character length between 8 and 128.)");
  }

  if (lower === true && upper === true && numbers === true && special === true) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 /'\"!#$%&)(*+,-.:;<>=?@[]\\^_~`{|}";
    var charLength = characters.length;
    var output = '';
    for (var i = 0; i < length; i++) {
      output += characters.charAt(Math.floor(Math.random() * charLength));
    }
    return output;
  } else if (lower === true && upper === true && numbers === false && special === true) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz /'\"!#$%&)(*+,-.:;<>=?@[]\\^_~`{|}";
    var charLength = characters.length;
    var output = '';
    for (var i = 0; i < length; i++) {
      output += characters.charAt(Math.floor(Math.random() * charLength));
    }
    return output;
  } else if (lower === true && upper === true && numbers === true && special === false) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    var charLength = characters.length;
    var output = '';
    for (var i = 0; i < length; i++) {
      output += characters.charAt(Math.floor(Math.random() * charLength));
    }
    return output;
  } else if (lower === false && upper === true && numbers === true && special === true) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 /'\"!#$%&)(*+,-.:;<>=?@[]\\^_~`{|}";
    var charLength = characters.length;
    var output = '';
    for (var i = 0; i < length; i++) {
      output += characters.charAt(Math.floor(Math.random() * charLength));
    }
    return output;
  } else if (lower === true && upper === false && numbers === true && special === true) {
    var characters = "abcdefghijklmnopqrstuvwxyz1234567890 /'\"!#$%&)(*+,-.:;<>=?@[]\\^_~`{|}";
    var charLength = characters.length;
    var output = '';
    for (var i = 0; i < length; i++) {
      output += characters.charAt(Math.floor(Math.random() * charLength));
    }
    return output;
  } else if (lower === true && upper === false && numbers === true && special === false) {
    var characters = "abcdefghijklmnopqrstuvwxyz1234567890";
    var charLength = characters.length;
    var output = '';
    for (var i = 0; i < length; i++) {
      output += characters.charAt(Math.floor(Math.random() * charLength));
    }
    return output;
  } else if (lower === true && upper === true && numbers === false && special === false) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var charLength = characters.length;
    var output = '';
    for (var i = 0; i < length; i++) {
      output += characters.charAt(Math.floor(Math.random() * charLength));
    }
    return output;
  } else if (lower === true && upper === false && numbers === false && special === true) {
    var characters = "abcdefghijklmnopqrstuvwxyz /'\"!#$%&)(*+,-.:;<>=?@[]\\^_~`{|}";
    var charLength = characters.length;
    var output = '';
    for (var i = 0; i < length; i++) {
      output += characters.charAt(Math.floor(Math.random() * charLength));
    }
    return output;
  } else if (lower === false && upper === true && numbers === true && special === false) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    var charLength = characters.length;
    var output = '';
    for (var i = 0; i < length; i++) {
      output += characters.charAt(Math.floor(Math.random() * charLength));
    }
    return output;
  } else if (lower === false && upper === true && numbers === false && special === true) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ /'\"!#$%&)(*+,-.:;<>=?@[]\\^_~`{|}";
    var charLength = characters.length;
    var output = '';
    for (var i = 0; i < length; i++) {
      output += characters.charAt(Math.floor(Math.random() * charLength));
    }
    return output;
  } else if (lower === false && upper === false && numbers === true && special === true) {
    var characters = "1234567890 /'\"!#$%&)(*+,-.:;<>=?@[]\\^_~`{|}";
    var charLength = characters.length;
    var output = '';
    for (var i = 0; i < length; i++) {
      output += characters.charAt(Math.floor(Math.random() * charLength));
    }
    return output;
  } else if (lower === true && upper === false && numbers === false && special === false) {
    var characters = "abcdefghijklmnopqrstuvwxyz";
    var charLength = characters.length;
    var output = '';
    for (var i = 0; i < length; i++) {
      output += characters.charAt(Math.floor(Math.random() * charLength));
    } return output;
  } else if (lower === false && upper === true && numbers === false && special === false) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var charLength = characters.length;
    var output = '';
    for (var i = 0; i < length; i++) {
      output += characters.charAt(Math.floor(Math.random() * charLength));
    }
    return output;
  } else if (lower === false && upper === false && numbers === true && special === false) {
    var characters = "1234567890";
    var charLength = characters.length;
    var output = '';
    for (var i = 0; i < length; i++) {
      output += characters.charAt(Math.floor(Math.random() * charLength));
    }
    return output;
  } else if (lower === false && upper === false && numbers === false && special === true) {
    var characters = " /'\"!#$%&)(*+,-.:;<>=?@[]\\^_~`{|}";
    var charLength = characters.length;
    var output = '';
    for (var i = 0; i < length; i++) {
      output += characters.charAt(Math.floor(Math.random() * charLength));
    }
    return output;
  } else {
    alert("Please be sure to choose at least one type of character.");
  }
}
