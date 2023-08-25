const bookmarkImg = document.querySelector('[data-js="bookmarkImg"]');
const bookmark = document.querySelector('[data-js="bookmarkButton"]');

function addBlackImage() {
  bookmarkImg.setAttribute("src", "./images/bookmark.png");
}

function addWhiteImage() {
  bookmarkImg.setAttribute("src", "./images/whitebookmark.png");
}

bookmark.addEventListener("click", () => {
  if (bookmarkImg.classList.contains("bookmarked")) {
    bookmarkImg.classList.remove("bookmarked");
    addBlackImage();
  } else {
    bookmarkImg.classList.add("bookmarked");
    addWhiteImage();
  }
});

const answerButton = document.querySelector('[data-js="answer-btn"]');
const answerText = document.querySelector('[data-js="answer-text"]');

answerButton.addEventListener("click", () => {
  if (answerText.classList.contains("hidden")) {
    answerText.classList.remove("hidden");
    answerButton.textContent = "hide answer";
  } else {
    answerText.classList.add("hidden");
    answerButton.textContent = "show answer";
  }
});
