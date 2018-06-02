//Offical PHjs Library

//Function to get value of an input field. Paramaters -> input id (Ex. getVal('user'); -> Returns the value of the user field)
function getVal(id) {
  try {
    return document.getElementById(id).value;
  } catch(e) {
    console.log("Error -> " + e);
  }
}

//Function to reverse a string. Paramaters -> string to be reversed (Ex. reverse('cat'); -> Returns 'tac')
function reverse(str) {
try {
    return str.split("").reverse().join("");
  } catch(e) {
    console.log("Error -> " + e);
  }
}
