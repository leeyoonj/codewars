// Grasshopper summation 8kyu
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

let summation = function (num) {
    let result = 0;
    for (let i = 1; i <= num; i++) {
      result += i;
    }
    return result;
  }


// Another solution:

function summation(num) {
    return num * (num + 1) / 2
}

OR 

const summation = n => n * (n + 1) / 2;
