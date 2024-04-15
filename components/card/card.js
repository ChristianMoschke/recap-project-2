const answerButton = document.querySelector('[data-js="answer-button"]');
const answerText = document.querySelector('[data-js="answer-text"]');

answerButton.addEventListener("click", () => {
  toggleAnswerText();
  toggleAnswerButtonText();
});

function toggleAnswerText() {
  answerText.classList.toggle("card__answer--active");
}

function toggleAnswerButtonText() {
  if (answerButton.innerText === "Show answer") {
    answerButton.innerText = "Hide answer";
  } else {
    answerButton.innerText = "Show answer";
  }
}
