function findLongestWordLength(sentence){
  const words = sentence.split(" ");
  let longuestWord = 0;
  for (const word of words){
    if(word.length > longuestWord)
        longuestWord = word.length;
  }

  return longuestWord;
}


console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // Output: 6
