const bookmarkImg = document.querySelector('[data-js="bookmarkImg"]');
const bookmarkButton = document.querySelector('[data-js="bookmarkButton"]');

function addBlackImage() {
  bookmarkImg.setAttribute("src", "./images/bookmark.png");
}

function addWhiteImage() {
  bookmarkImg.setAttribute("src", "./images/whitebookmark.png");
}

bookmarkButton.addEventListener("click", () => {
  if (bookmarkImg.src === "http://localhost:5500/images/whitebookmark.png") {
    addBlackImage();
  } else {
    addWhiteImage();
  }
});
