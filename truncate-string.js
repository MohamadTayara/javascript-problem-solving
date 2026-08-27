function truncateString(string, number) {
  if (string.length <= number) return string;
  const truncatedString = string.slice(0, number) + "...";
  return truncatedString;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
