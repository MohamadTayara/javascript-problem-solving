function maskEmail(email) {
  const charPosition = email.indexOf("@");
  const domain = email.slice(charPosition);
  const username = email.slice(0, charPosition);
  const maskedUsername =
    username[0] +
    "*".repeat(username.length - 2) +
    username[username.length - 1];
  return maskedUsername + domain;
}

console.log(maskEmail("apple.pie@example.com"));
console.log(maskEmail("freecodecamp@example.com"));
console.log(maskEmail("info@test.dev"));
console.log(maskEmail("user@domain.org"));
