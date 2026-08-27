let count = 0;

function cardCounter(card) {
  if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6) {
    count++;
  } else if (
    card == 10 ||
    card == "J" ||
    card == "Q" ||
    card == "K" ||
    card == "A"
  ) {
    count--;
  }
  return `${count} ${+count > 0 ? "Bet" : "Hold"}`;
}

count = 0;
console.log(cardCounter(2));
console.log(cardCounter(3));
console.log(cardCounter(4));
console.log(cardCounter(5));
console.log(cardCounter(6));
// Final expected: "5 Bet"

count = 0;
console.log(cardCounter(7));
console.log(cardCounter(8));
console.log(cardCounter(9));
// Final expected: "0 Hold"

count = 0;
console.log(cardCounter(10));
console.log(cardCounter("J"));
console.log(cardCounter("Q"));
console.log(cardCounter("K"));
console.log(cardCounter("A"));
// Final expected: "-5 Hold"

count = 0;
console.log(cardCounter(3));
console.log(cardCounter(7));
console.log(cardCounter("Q"));
console.log(cardCounter(8));
console.log(cardCounter("A"));
// Final expected: "-1 Hold"

count = 0;
console.log(cardCounter(2));
console.log(cardCounter("J"));
console.log(cardCounter(9));
console.log(cardCounter(2));
console.log(cardCounter(7));
// Final expected: "1 Bet"

count = 0;
console.log(cardCounter(2));
console.log(cardCounter(2));
console.log(cardCounter(10));
// Final expected: "1 Bet"

count = 0;
console.log(cardCounter(3));
console.log(cardCounter(2));
console.log(cardCounter("A"));
console.log(cardCounter(10));
console.log(cardCounter("K"));
// Final expected: "-1 Hold"
