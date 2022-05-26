// reversed sequence 8kyu
// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    let answer = [];          //intialize an array
    
    for (let i=n; i>0; i--){  //loop down from n to 1
      answer.push(i);         //push each i to the answer array
    }
    return answer;            //return answer;
  };


  /* 
  
  Another solution:
  
  const reverseSeq = n => {
    return Array(n).fill(0).map((e, i) => n - i );
  };
  
  */