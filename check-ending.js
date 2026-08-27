function confirmEnding(string, target) {
  const test = string.slice(-target.length);
  return test === target ? true : false;
}

console.log(confirmEnding("Hello world!", "orld!"));
console.log(confirmEnding("Hello world!", "rd!"));
