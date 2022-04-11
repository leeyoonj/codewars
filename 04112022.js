// Beginner - Lost Without a Map 8kyu
/* Given an array of integers, return a new array with each value doubled.

For example:
[1, 2, 3] --> [2, 4, 6] */

function maps(x){
    return x.map(n => n * 2);
}

// Another solution:

maps = x => x.map(e => e * 2);

// Another solution:

const maps = arr => arr.map( x => x * 2 )
