function isPalindrome(word) {
  word = word.toLowerCase();
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) return false;
  }

  return true;
}

function findPalindromeBreaks(words) {
  const indices = [];
  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      indices.push(i);
    }
  }

  return indices;
}

function findRepeatedPhrases(words, phraseLength) {
  if (words.length <= phraseLength) return [];

  const indices = [];
  const phrases = [];
  for (let i = 0; i <= words.length - phraseLength; i++) {
    phrases.push(words.slice(i, i + phraseLength));
  }
  let flag = true;
  for (let i = 0; i < phrases.length; i++) {
    for (let j = 0; j < phrases.length; j++) {
      flag = true;
      for (let k = 0; k < phrases[j].length; k++) {
        if (phrases[i][k] != phrases[j][k]) {
          flag = false;
          break;
        }
      }
      if (flag && j !== i) {
        indices.push(i);
        break;
      }
    }
  }

  return indices;
}

function analyzeTexts(texts, phraseLength) {
  if (!texts) return [];

  const arr = [];
  for (let i = 0; i < texts.length; i++) {
    let repeatedPhrases = findRepeatedPhrases(texts[i], phraseLength);
    let palindromeBreaks = findPalindromeBreaks(texts[i]);

    arr.push({
      repeatedPhrases: repeatedPhrases,
      palindromeBreaks: palindromeBreaks 
    });
  }
  return arr;
}

let texts = [
  ["the", "cat", "sat", "the", "cat"],
  ["racecar", "hello", "level", "world"],
  ["go", "go", "go"],
  ["madam", "civic", "radar"],
];

// Test 1: Palindromes
console.log("Test 1: isPalindrome");
console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("Madam"));   // true

// Test 2: Palindrome breaks
console.log("\nTest 2: findPalindromeBreaks");
console.log(findPalindromeBreaks(["level", "cat", "radar", "dog"]));
// Expected: [1, 3]

// Test 3: Repeated phrases
console.log("\nTest 3: findRepeatedPhrases");
console.log(findRepeatedPhrases(["the", "cat", "sat", "the", "cat"], 2));
// Expected: [0, 3]

// Test 4: Overlapping repeated phrases
console.log("\nTest 4: Overlapping phrases");
console.log(findRepeatedPhrases(["go", "go", "go"], 2));
// Expected: [0, 1]

// Test 5: Analyze multiple texts
console.log("\nTest 5: analyzeTexts");

texts = [
  ["the", "cat", "sat", "the", "cat"],
  ["racecar", "hello", "level", "world"]
];

console.log(JSON.stringify(analyzeTexts(texts, 2), null, 2));

// Expected:
// [
//   {
//     repeatedPhrases: [0, 3],
//     palindromeBreaks: [0, 1, 2, 3, 4]
//   },
//   {
//     repeatedPhrases: [],
//     palindromeBreaks: [1, 3]
//   }
// ]

// Test 6: Empty input
console.log("\nTest 6: Empty input");
console.log(analyzeTexts([], 2));
// Expected: []

