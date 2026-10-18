function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }
  return count;
}

function getPunctuationCount(sentence) {
  const punctuations = ".,!?;:-()[]{}\"'–";
  let count = 0;

  for (const char of sentence) {
    if (punctuations.includes(char)) {
      count++;
    }
  }
  return count;
}

function getWordCount(sentence) {
  if (sentence.trim() === "") {
    return 0;
  }

  const words = sentence.trim().split(" ");
  let count = 0;

  for (const word of words) {
    if (word !== "") {
      count++;
    }
  }

  return count;
}

// Test all functions using one sentence
const sentence = "Hello, world! JavaScript is fun.";

console.log(`Sentence: ${sentence}`);
console.log(`Vowel Count: ${getVowelCount(sentence)}`);
console.log(`Consonant Count: ${getConsonantCount(sentence)}`);
console.log(`Punctuation Count: ${getPunctuationCount(sentence)}`);
console.log(`Word Count: ${getWordCount(sentence)}`);