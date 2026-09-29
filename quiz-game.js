const questions = [
  {
    category: "JavaScript",
    question: "Which keyword declares a constant?",
    choices: ["let", "const", "var"],
    answer: "const",
  },
  {
    category: "Math",
    question: "What is 5 + 5?",
    choices: ["8", "10", "12"],
    answer: "10",
  },
  {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["Paris", "Rome", "Madrid"],
    answer: "Paris",
  },
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Venus"],
    answer: "Mars",
  },
  {
    category: "Computers",
    question: "What does CPU stand for?",
    choices: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Program Utility",
    ],
    answer: "Central Processing Unit",
  },
];

function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function getRandomComputerChoice(choices) {
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function getResults(question, choice) {
  if (choice == question.answer) return `The computer\'s choice is correct!`;
  else
    return `The computer\'s choice is wrong. The correct answer is: ${question.answer}`;
}

// ==========================================
// TESTS
// ==========================================

console.log("\n--- Test 1: getRandomQuestion() ---");

const randomQuestion = getRandomQuestion(questions);

console.log("Random question:", randomQuestion);
console.log("Question exists in array:", questions.includes(randomQuestion));
// Expected: true

console.log("\n--- Test 2: getRandomQuestion() multiple times ---");

for (let i = 0; i < 5; i++) {
  console.log(getRandomQuestion(questions));
}

// Expected:
// Five question objects.
// They may repeat because the selection is random.

console.log("\n--- Test 3: getRandomComputerChoice() ---");

const testChoices = ["A", "B", "C"];

for (let i = 0; i < 10; i++) {
  const choice = getRandomComputerChoice(testChoices);
  console.log("Computer choice:", choice);
}

// Expected:
// Every result should be "A", "B", or "C".

console.log("\n--- Test 4: Correct answer ---");

const question1 = {
  question: "What is 5 + 5?",
  choices: ["8", "10", "12"],
  answer: "10",
};

console.log(getResults(question1, "10"));

// Expected:
// The computer's choice is correct!

console.log("\n--- Test 5: Wrong answer ---");

console.log(getResults(question1, "8"));

// Expected:
// The computer's choice is wrong. The correct answer is: 10

console.log("\n--- Test 6: Test real question ---");

const geographyQuestion = questions[2];

console.log(getResults(geographyQuestion, "Paris"));

// Expected:
// The computer's choice is correct!

console.log("\n--- Test 7: Wrong answer on real question ---");

console.log(getResults(geographyQuestion, "Rome"));

// Expected:
// The computer's choice is wrong. The correct answer is: Paris

console.log("\n--- Test 8: Full program flow ---");

const selectedQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(selectedQuestion.choices);

console.log("Category:", selectedQuestion.category);
console.log("Question:", selectedQuestion.question);
console.log("Choices:", selectedQuestion.choices);
console.log("Computer chose:", computerChoice);
console.log(getResults(selectedQuestion, computerChoice));
