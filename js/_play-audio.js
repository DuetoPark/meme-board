let lastWrapper = '';
let lastAudio = '';
let lastDesc = '';
const keyDivs = document.querySelectorAll('div.key');
const keyButtons = document.querySelectorAll('div.key button');

function removeClass(wrapper, audio, desc) {
  const audioDuration = audio.duration * 1000;

  window.setTimeout(() => {
    wrapper.classList.remove('is-playing');
    desc.classList.remove('is-active');
  }, audioDuration);
}

function addClass(wrapper, desc) {
  wrapper.classList.add('is-playing');
  desc.classList.add('is-active');
}

function playAudio(nowPlaying) {
  nowPlaying.currentTime = 0;
  nowPlaying.play();
}

function playHandler(e) {
  const keyCode = e.keyCode ? e.keyCode : e.currentTarget.dataset.key;
  const audio = document.querySelector(`audio[data-key='${keyCode}']`);
  const wrapper = document.querySelector(`div[data-key='${keyCode}']`);
  const desc = document.querySelector(`.desc[data-key='${keyCode}']`);

  if (keyCode == 9) {
    e.preventDefault();
  }

  if (!audio) return;

  // NOTE: When currentAudio is playing, pause LastAudio.
  if (lastAudio && audio != lastAudio && !lastAudio.ended) {
    lastAudio.pause();
    lastWrapper.classList.remove('is-playing');
    lastDesc.classList.remove('is-active');
  }

  addClass(wrapper, desc);
  playAudio(audio);
  removeClass(wrapper, audio, desc);

  lastWrapper = wrapper;
  lastAudio = audio;
  lastDesc = desc;
}

window.addEventListener('keydown', playHandler);
keyButtons.forEach((button) => button.addEventListener('click', playHandler));
