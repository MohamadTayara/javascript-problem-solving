function mask(card) {
  let mask = "";
  for(let i = 0; i < card.length - 4; i++){
    if(card[i] !== '-' && card[i] !== " ")
      mask += "*";
    else
      mask += card[i];
  }
  for(let i = card.length -4; i < card.length; i++)
    mask += card[i];

  return mask;
}

console.log(mask("4012-8888-8888-1881")); // "****-****-****-1881"
console.log(mask("5105 1051 0510 5100")); // "**** **** **** 5100"
console.log(mask("6011 1111 1111 1117")); // "**** **** **** 1117"
console.log(mask("2223-0000-4845-0010")); // "****-****-****-0010"