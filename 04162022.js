// String Repeat 8kyu
/* Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello" */

function repeatStr (n, s) {
    return s.repeat(n);
  }

// Another Solution:

repeatStr = (n, s) => s.repeat(n)
