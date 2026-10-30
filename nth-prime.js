function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

function nthPrime(n) {
  let primeCount = 0;
  for (let i = 2; i < Infinity; i++) {
    if (isPrime(i)) primeCount++;
    if (primeCount === n) return i;
  }
}

console.log(nthPrime(5)); // 11
console.log(nthPrime(10)); // 29
console.log(nthPrime(16)); // 53
console.log(nthPrime(99)); // 523
console.log(nthPrime(1000)); // 7919
