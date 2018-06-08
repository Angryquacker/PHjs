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
    if (typeof str == 'string') {
      return str.split("").reverse().join("");
    } else {
      return 'Invalid Type';
    }
  },
  
  //Function to generate a random number between two values. Paramaters -> min, max (Ex. genRanNum(10, 100); -> Returns a value between 10 and 100)
  genRanNum: function(min, max) {
    if (typeof min != 'number' || min > max) {
      return 'Invalid Inputs'; 
    } else {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  },
  
  getEl: function(name) {
    try {
      let half = name.split("");
      half.shift();
      let full = half.join("");
      let pre = name.split("").shift();
      if (pre == '.') {
        return document.getElementsByClassName(full);
      } 
      else if (pre == '#') {
        return document.getElementById(full);
      }
    } catch(e) {
      console.log("Error -> " + e); 
    }
  },
  
};
