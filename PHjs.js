//Offical PHjs Library

const PH = {
  //Function to get value of an input field. Paramaters -> input id (Ex. getVal('user'); -> Returns the value of the user field)
  getVal: function(id) {
    try {
      return document.getElementById(id).value;
    } catch(e) {
      console.log("Error -> " + e);
    }
  },
  
  //Function to reverse a string. Paramaters -> string to be reversed (Ex. reverse('cat'); -> Returns 'tac')
  reverse: function(str) {
    try {
      return str.split("").reverse().join("");
    } catch(e) {
      console.log("Error -> " + e);
    }
  },
  
  //Function to generate a random number between two values. Paramaters -> min, max (Ex. genRanNum(10, 100); -> Returns a value between 10 and 100)
  genRanNum: function(min, max) {
    if (typeof min != 'number') {
      return 'Invalid Type'; 
    } else {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
  
};
