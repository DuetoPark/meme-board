const cover = document.querySelector('.meme-board-cover');
const startButton = cover.querySelector('.start-button');

startButton.addEventListener('click', () => {
  cover.classList.remove('is-active');
});
