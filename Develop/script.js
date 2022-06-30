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
//Function for numbers
function determineNumbers(){
  numberCheck= prompt("Include numbers in password? Yes or No");
  numberCheck=numberCheck.toLowerCase();
  if (numberCheck === null || numberCheck === ""){
    alert("Please answer Yes or No");
    determineNumbers();

  }else if (numberCheck === "yes"){
    numberCheck = true;
    return numberCheck;

  }else if (numberCheck === "no"){
    numberCheck = false;
    return numberCheck;
  
  }else {
    alert("Please answer Yes or No");
    determineNumbers();
  }
  return numberCheck;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);