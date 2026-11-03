const morseCode = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
};

function decodeMorse(code) {
  let words = code.split("   ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    let letters = words[i].split(" ");
    for (let j = 0; j < letters.length; j++) {
      result += morseCode[letters[j]];
    }
    if (i < words.length - 1) result += " ";
  }

  return result;
}

// Tests
console.log(decodeMorse("--..")); // "Z"
console.log(decodeMorse("... --- ...")); // "SOS"
console.log(decodeMorse(".... . .-.. .-.. ---   .-- --- .-. .-.. -..")); // "HELLO WORLD"
console.log(
  decodeMorse(
    "- .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. . -..   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --.",
  ),
); // "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG"
