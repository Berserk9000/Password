//Variables needed
var generateBtn = document.querySelector("#generate");
var numberChar = "0123456789";
var specialChar = "!@#$.&*"
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

//function for pword length
function passLength(){
  passwordLength=prompt("Please choose between 8-128 characters for password length: ");
  if (passwordLength<8){
    alert("Password length must be a number between 8-128 characters");
    passlength();
  }else if (passwordLength>128){
    alert("Password length must be a number between 8-128 characters");
    passlength();
  }
  return passwordLength;
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


//Function for special characters
function determineSpecial(){
  specialCheck = prompt("Inclde special characters in password? (Yes or No)");
    specialCheck = specialCheck.toLowerCase();

    if (specialCheck === null || specialCheck === ""){
      alert("Please answer Yes or No");
      determineSpecial();

    }else if (specialCheck === "yes"){
      specialCheck = true;
      return specialCheck;

    }else if (specialCheck === "no"){
      specialCheck = false;
      return specialCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineSpecial();
    }
    return specialCheck;
}

//function for letters
function determineUppercase(){
  uppercaseCheck = prompt("Include uppercase letters in your passwrd?(Yes or No)");
    uppercaseCheck = uppercaseCheck.toLowerCase();

    if (uppercaseCheck === null || uppercaseCheck === ""){
      alert("Please answer Yes or No");
      determineUppercase();

    }else if (uppercaseCheck === "yes"){
      uppercaseCheck = true;
      return uppercaseCheck;

    }else if (uppercaseCheck === "no"){
      uppercaseCheck = false;
      return uppercaseCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineUppercase();
    }
    return uppercaseCheck;
}



// check if generate works
function generatePassword(){
  passLength();
  console.log(passwordLength);
  determineUppercase();
  console.log(uppercaseCheck);
  determineNumbers();
  console.log(numberCheck);
  determineSpecial();
  console.log(specialCheck);
  var characters = lowercaseChar
  var password = "";
  if (uppercaseCheck && numberCheck && specialCheck){
    characters += uppercaseChar + numberChar + specialChar;
  
  }else if (uppercaseCheck && numberCheck){
    characters += uppercaseChar + numberChar;
  
  }else if (numberCheck && specialCheck){
    characters += numberChar + specialChar;
  
  }else if (uppercaseCheck && specialCheck){
    characters += uppercaseChar + specialChar;
  
  }else if (uppercaseCheck){
    characters += uppercaseChar;
  
  }else if(numberCheck){
    characters += numberChar;
  
  }else if (specialCheck){
    characters += specialChar;

  }else{characters += uppercaseChar + numberChar + specialChar;}

    for(var i = 0; i < passwordLength; i++){
      password += characters.charAt(Math.random() * characters.length);
    }
    return password;
  
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
