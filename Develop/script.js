//Variables needed
var generateBtn = document.querySelector("#generate");
var numberChar = "0123456789";
var specialChar = "!@#$.|"
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

//function for pword length
function passlength (){
  passwordLength=prompt("Please choose between 8-128 characters for password length: ");

  if (passwordLength<8){
    alert("Please choose between 8-128 characters");
    passlength();
  }
  else if (passwordLength>128){
    alert("Password length must be a number between 8-128 characters");
    passLength(); 
  }
  return passlength
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);