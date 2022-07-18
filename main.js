const upvoteButton = document.getElementById('upvote');
const downvoteButton = document.getElementById('downvote');
const upvoteCountElement = document.getElementById('upvote-count');
const downvoteCountElement = document.getElementById('downvote-count');

let upvoteButtonClicked = false;
let downvoteButtonClicked = false;

upvoteButton.addEventListener('click', () => {
  if (!upvoteButtonClicked) {
    upvoteButton.src = "images/clicked-upvote.webp";
    ++upvoteCountElement.innerText;
    if (downvoteButtonClicked) {
      downvoteButton.src = "images/downvote.png";
      --downvoteCountElement.innerText;
    }
    upvoteButtonClicked = true;
    downvoteButtonClicked = false;
  }
});

downvoteButton.addEventListener('click', () => {
  if (!downvoteButtonClicked) {
    downvoteButton.src = "images/clicked-downvote.png";
    ++downvoteCountElement.innerText;
    if(upvoteButtonClicked) {
      upvoteButton.src = "images/upvote.png";
      --upvoteCountElement.innerText;
    }
    downvoteButtonClicked = true;
    upvoteButtonClicked = false;
  }
});
