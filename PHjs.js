//Offical PHjs Library


/*
  Boring Documentation Awaits:

  PH.getVal(id); -> Paramaters: id of the thing you wish to get the value of.
    Returns the value of the given thing.

  PH.reverse(str); -> Paramaters: The string to be reversed.
    Returns the given string, but reversed.

  PH.genRanNum(min, max); -> Paramaters: The minimum and maximum of the number to be generated.
    Returns a number between two given values.
    
  PH.getEl(name); -> Paramaters: The id || class of the element(s) to be returned.
    Returns the element based on the class || id.
*/


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
    //Make Sure the min isn't greater than the max, and the min and max are both numbers
    if (typeof min != 'number' || min > max || typeof max != 'number') {
      return 'Invalid Inputs'; 
    } else {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  },
  
  //Function to get an element(s) based on prefix (# || .)
  getEl: function(name) {
    try {
      //Get the prefex of the id || class
      let half = name.split("");
      half.shift();
      let full = half.join("");
      let pre = name.split("").shift();

      //Check wether prefix is # || . and retrun accordingly
      if (pre == '.') {
        return document.getElementsByClassName(full);
      } 
      else if (pre == '#') {
        return document.getElementById(full);
      } 
      else {
        return 'Some form of error has occured';
      }
    } catch(e) {
      console.log("Error -> " + e); 
    }
  },
};

/* const Shape = {
  draw: function(cId, shape, fStyle, x, y, w, h) {
    //Get the canvas and its context
    let c = document.getElementById(cId);
    let ctx = c.getContext('2d'); 

    //Draw shape based on user input
    switch(shape) {
      case 'rect':
        ctx.fillStyle = fStyle;
        ctx.fillRect(x, y, w, h);
        break;
      default:
        return 'Invalid Shape';
    }
  },
}; */