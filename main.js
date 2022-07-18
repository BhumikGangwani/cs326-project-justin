// UI Components
// Grab the DOM elements that I work with
const upvoteButton = document.getElementById('upvote');
const downvoteButton = document.getElementById('downvote');
const upvoteCountElement = document.getElementById('upvote-count');
const downvoteCountElement = document.getElementById('downvote-count');

// Keeps track of the users vote
let upvoteButtonClicked = false;
let downvoteButtonClicked = false;

// Change the vote images to reflect that the user has clicked upvote
// Increase the count of upvotes by 1
// Decrease the count of downvotes by 1 if the user had previously downvoted the food location
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

// Change the vote images to reflect that the user has clicked downvote
// Increase the count of downvotes by 1
// Decrease the count of upvotes by 1 if the user had previously upvoted the food location
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
