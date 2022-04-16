// Return Negative 8kyu
/* In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12 */

function makeNegative(num) {
    return -Math.abs(num);
  }

// Another Solution:

function makeNegative(num) {
    return Math.abs(num) * -1;
}

function makeNegative(num) {
    return num < 0 ? num : -num;
}