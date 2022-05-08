// Century From Year 8kyu
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc. Given a year, return the century it is in.


function century(year) {
    return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
  }


// Another solution:
const century = year => Math.ceil(year/100)
