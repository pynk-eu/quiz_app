const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  const question = data.question;
  const answer = data.answer;
  const tag = data.tag;
  const sectionCardElement = document.createElement("section");
  sectionCardElement.classList.add("question-card");
  const pElement1 = document.createElement("p");
  pElement1.classList.add("question");
  pElement1.textContent = question;
  sectionCardElement.append(pElement1);

  const pElement2 = document.createElement("p");
  pElement2.classList.add("answer");
  pElement2.textContent = answer;
  sectionCardElement.append(pElement2);

  const buttonElement = document.createElement("button");
  buttonElement.classList.add("tag");
  buttonElement.textContent = tag;
  sectionCardElement.append(buttonElement);
  document.querySelector("main").append(sectionCardElement);
});

const textArea = document.querySelector('[data-js="textArea"]');
const textArea1 = document.querySelector('[data-js="textArea1"]');
const remainingChar = document.querySelector('[data-js="remainingChar"]');
const remainingChar1 = document.querySelector('[data-js="remainingChar1"]');

function textRemaining(text, remainingChar) {
  const maxChar = text.getAttribute("maxlength");
  const remaining = maxChar - text.value.length;
  remainingChar.textContent = remaining;
}

textArea.addEventListener("input", () => {
  textRemaining(textArea, remainingChar);
});

textArea1.addEventListener("input", () => {
  textRemaining(textArea1, remainingChar1);
});
