// Fake Binary 8kyu
/* Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string. Note: input will never be an empty string. */

function fakeBin(x){
    var newStr = "";
    for(let i=0; i<x.length; i++){
      if (Number (x[i]) >= 5){
        newStr += "1"
      }
      else{
        newStr += "0";
      }
    }
    return newStr;
  }