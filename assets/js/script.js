

//Set up variables for a button, userChoice, and the generated password. Also set up arrays for all of the chracters needed for the password generation.




// this function will call the generated password function, and will then print that generated password onto the screen.
function writePassword() {
  
}
// here make a generate password function which will gather the user input about length and inclusions, keeping them serperate helps avoid an endless cycle as well as actually creating the password
function generatePassword() {
  // this function will gather the length using a prompt !hint you may have to return an array containing the input here if you are having trouble, aka [userPassLength]!
  function userInput() {
    let userPassLength = window.prompt("Please indicate desired password length: 8-128");
  }
  //this function gathers user's inclusions (lowercase, uppercase, number, special) !hint return an array! *** bonus *** how can we ensure the user selects at least one option?
  function userConfirms() {
    }

  }

  let userPassLengthHolder = userInput();
  //this step is only necessary if you returned an array from userInput()
  userPassLength = userPassLengthHolder[0];


//here we use the array returned from userConfirms() to select which inclusions the user wants in their password. 
  let userBoolean = userConfirms();
  userLower //?
  userUpper //?
  userNumber //?
  userSpecial//?

  //here we need to use if statements to add the arrays of the desired inclusions to our userChoice array
  if (userLower) {
    //?
  }
  if (userUpper) {
    //?
  }
  if (userNumber) {
    //?
  }
  if (userSpecial) {
    //?
//here we will actually create our password
  function createPassword() {
    //this is so the generator can be run over and over without refreshing the page.
    if (generatedPassword.length > 0) {
      generatedPassword = "";
    }
    //here will need to set up a loop that will make a random character for each character of the password
    for (let i = 0; i < userPassLength; i++) {
      
  }}
  createPassword ();
//now we need to check to ensure our password contains at least one of each of the inclusions requested !hint you need the .some array method here!
  if (userLower) {
    // checks generatedPassword if it contains at least one item in lowerCase
    let doesContainLower //?
    if (!doesContainLower) {
      return createPassword();
    }
  }
  
  if (userUpper) {
    // check generatedPassword if it contains at least one item in upperCase
    let doesContainUpper//?
    if (!doesContainUpper) {
      return createPassword();
    }
  }
  if (userNumber) {
    // check generatedPassword if it contains at least one item in numbers
    let doesContainNumber //?
    if (!doesContainNumber) {
      return createPassword();
    }
  }
  if (userSpecial) {
    // check generatedPassword if it contains at least one item in specialCharacters
    let doesContainSpecial //?
    if (!doesContainSpecial) {
      return createPassword();
    }
  }
  return generatedPassword;
}

// add an event listener to your button to run the write password function
