// script.js

const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function showQuestion(question) {
  questionContainer.textContent = question.question;
  optionsContainer.innerHTML = '';

  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.addEventListener('click', () => selectOption(question, index));
    optionsContainer.appendChild(button);
  });
}

function selectOption(question, selectedOptionIndex) {
  const selectedOption = question.options[selectedOptionIndex];

  // Display explanation
  const explanationParagraph = document.createElement('p');
  explanationParagraph.textContent = question.explanation;
  explanationParagraph.style.color = question.correctAnswer === selectedOption ? '#4caf50' : '#ff3333'; // Green for correct, red for incorrect
  optionsContainer.appendChild(explanationParagraph);

  // Disable buttons after an option is selected
  const optionButtons = optionsContainer.getElementsByTagName('button');
  for (const button of optionButtons) {
    button.disabled = true;
  }

  // Update score
  if (selectedOption === question.correctAnswer) {
    score++;
  }

  // Display next button
  nextButton.style.display = 'block';
}

function showResult() {
  quizContainer.innerHTML = `
    <h1>Quiz Completed</h1>
    <p>Your Score: ${score} out of ${questions.length}</p>
  `;
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion(questions[currentQuestionIndex]);
    nextButton.style.display = 'none'; // Hide next button after moving to the next question
  } else {
    showResult();
  }
});

// Start the quiz
showQuestion(questions[currentQuestionIndex]);
