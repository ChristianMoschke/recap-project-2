const questionBox = document.querySelector('[data-js="question-box"]');
const answerBox = document.querySelector('[data-js="answer-box"]');
const questionCharactersLeft = document.getElementById(
  "question-characters-left"
);
const answerCharactersLeft = document.getElementById("answer-characters-left");

questionBox.addEventListener("input", () => {
  characterCounter(questionBox, questionCharactersLeft);
});

answerBox.addEventListener("input", () => {
  characterCounter(answerBox, answerCharactersLeft);
});

function characterCounter(textBox, counterElement) {
  const maxLength = textBox.getAttribute("maxlength");
  const currentLength = textBox.value.length;
  const remaining = maxLength - currentLength;
  counterElement.textContent = remaining;
}
