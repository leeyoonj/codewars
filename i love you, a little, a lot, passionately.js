// I love you, a little, a lot, passionately... not at all 8kyu
/* Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.    */


function howMuchILoveYou(nbPetals) {
   const input = nbPetals;
   const arr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
   let output = [];
   for (let i = 0; i < input; i += 1) {
     output.push(arr[i % arr.length]);
     }
     return output[output.length - 1];
  }

  // Another solution:

  function howMuchILoveYou(nbPetals) {
    let petals = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    return petals[(nbPetals-1) % 6];
  }

  OR
  
  const howMuchILoveYou = nbPetals =>
  [`not at all`, `I love you`, `a little`, `a lot`, `passionately`, `madly`][nbPetals % 6];