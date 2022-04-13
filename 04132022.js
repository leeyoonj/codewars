// Convert boolean values to strings 'Yes' or 'No' 8kyu
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
    return bool ? 'Yes':'No';
}

// Another solution:

function boolToWord( bool ){
    if (bool) {
      return 'Yes';
    } else {
      return 'No';
    }
  }

// Another solution:

let boolToWord = bool => bool ? 'Yes' : 'No';
