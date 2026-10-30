function checkStrength(password) {
  let conditionCount = 0;
  if (password.length >= 8) conditionCount++;
  if (
    containsChars(password, "abcdefghijklmnopqrstuvwxyz") &&
    containsChars(password, "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  )
    conditionCount++;
  if (containsChars(password, "0123456789")) conditionCount++;
  if (containsChars(password, "!@#$%^&*")) conditionCount++;

  if (conditionCount === 4) return "strong";
  else if (conditionCount < 2) return "weak";
  else return "medium";
}

function containsChars(string, characters) {
  for (let i = 0; i < characters.length; i++) {
    if (string.includes(characters[i])) return true;
  }

  return false;
}
