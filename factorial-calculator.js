const num = 5;

function factorialCalculator (num){
  let result = 1;
  for (let min = 1; min <= num; min++)
    result *= min
  return result;
}


const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`
console.log(resultMsg);