let lastAudio = '';
const keyButtons = document.querySelectorAll('button.key');
const keyDivs = document.querySelectorAll('div.key');

function addClass(wrapper) {
  wrapper.classList.add('is-playing');
}

function playAudio(nowPlaying) {
  nowPlaying.currentTime = 0;
  nowPlaying.play();
}

function playHandler(e) {
  const keyCode = e.keyCode ? e.keyCode : e.currentTarget.dataset.key;
  const audio = document.querySelector(`audio[data-key='${keyCode}']`);
  const wrapper = document.querySelector(`div[data-key='${keyCode}']`);

  if (!audio) return;

  // NOTE: When currentAudio is playing, pause LastAudio.
  if (lastAudio && audio != lastAudio && !lastAudio.ended) {
    lastAudio.pause();
  }

  addClass(wrapper);
  playAudio(audio);

  lastAudio = audio;
}

function removeClassHandler(e) {
  e.currentTarget.classList.remove('is-playing');
}

window.addEventListener('keydown', playHandler);
keyButtons.forEach((button) => button.addEventListener('click', playHandler));
keyDivs.forEach((div) =>
  div.addEventListener('transitionend', removeClassHandler)
);
