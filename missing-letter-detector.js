function fearNotLetter (input){
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const startIndex = alphabet.indexOf(input[0]);
  const endIndex = alphabet.indexOf(input[input.length-1]);
  const expected = alphabet.slice(startIndex, endIndex + 1);

  for (const letter of expected){
    if(!input.includes(letter))
      return letter;
  } 
  return undefined;
}


console.log(fearNotLetter("abce")); // d
console.log(fearNotLetter("abcdefghjklmno")); // i
console.log(fearNotLetter("stvwx")); // u
console.log(fearNotLetter("bcdf")); // e
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // undefined