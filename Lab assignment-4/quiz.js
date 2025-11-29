// JavaScript Quiz Game
// Lab Assignment 4
// Created by: [Your Name]
// Runs completely in the browser console

// Step 1: Create an array of quiz questions and answers
const quizQuestions = [
  { question: "What is the capital of France?", answer: "paris" },
  { question: "Which language runs in a web browser?", answer: "javascript" },
  { question: "What keyword is used to declare a variable in JavaScript?", answer: "let" },
  { question: "What does HTML stand for?", answer: "hypertext markup language" },
  { question: "Which company developed JavaScript?", answer: "netscape" }
];

// Step 2: Define the main function to run the quiz
function runQuiz() {
  let score = 0; // Step 3: Initialize score

  // Step 4: Loop through each question
  for (let i = 0; i < quizQuestions.length; i++) {
    let userAnswer = prompt(`Question ${i + 1}: ${quizQuestions[i].question}`);

    // Step 6: Normalize input (toLowerCase and trim)
    if (userAnswer) {
      userAnswer = userAnswer.toLowerCase().trim();
    } else {
      userAnswer = "";
    }

    // Step 7: Check the answer
    if (userAnswer === quizQuestions[i].answer) {
      alert("✅ Correct!");
      score++; // increase score for correct answer
    } else {
      alert(`❌ Wrong! The correct answer is "${quizQuestions[i].answer}".`);
    }
  }

  // Step 9: Show final score
  alert(`🎯 Quiz Complete!\nYour Final Score: ${score} out of ${quizQuestions.length}`);
}

// Step 10: Run the quiz
runQuiz();
