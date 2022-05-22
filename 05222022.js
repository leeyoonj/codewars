// Beginner Series #2 Clock 8kyu
/* Clock shows h hours, m minutes and s seconds after midnight. Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000 */

function past(h, m, s){
    return h * 3600000 + m * 60000 + s * 1000;
  }

// Another solution: 

function past(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
  }