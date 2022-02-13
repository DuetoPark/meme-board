import data from './meme.json' assert { type: 'json' };
import Control from './header-button.js';
import * as sound from './sound.js';
import MemeButton from './meme-button.js';

export let lastSound = null;
export let audioMap = new Map();

const MAX = data.length;
const MIN = 0;

const field = document.querySelector('.meme-board-field');

let soundList = [];

const headerControls = new Control();
headerControls.modal.setOpenListener(() => {
  lastSound && sound.stop(lastSound);
});
headerControls.setPauseListener(() => {
  lastSound && sound.stop(lastSound);
});
headerControls.setClearListener(() => {
  lastSound && sound.stop(lastSound);
});

const memeModalButtons = new MemeButton('.meme-list-modal .meme-audio-list');
memeModalButtons.setPlayListener((currentAudio) => {
  lastSound = currentAudio;
});
memeModalButtons.setClickListener((title) => {
  addButton(title);
  hidePlaceholder();
});

const fieldButtons = new MemeButton('.meme-board-field');
fieldButtons.setPlayListener((currentAudio) => {
  lastSound = currentAudio;
});

window.addEventListener('keydown', () => {
  const currentAudio = soundList[randomNumber(MAX, MIN)];
  const title = currentAudio.title;

  lastSound && sound.stop(lastSound);
  sound.play(currentAudio);

  lastSound = currentAudio;

  addButton(title);
  hidePlaceholder();

  // NOTE: 애니메이션 추가
});

function randomNumber(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function addButton(text) {
  const button = document.createElement('button');
  button.setAttribute('class', 'btn-36 btn-ghost meme-button');
  button.setAttribute('type', 'button');
  button.setAttribute('data-title', text);
  button.innerHTML = `<strong>${text}</strong>`;
  field.appendChild(button);
}

export function hidePlaceholder() {
  const placeholder = field.querySelector('.placeholder');

  if (placeholder.classList.contains('is-active')) {
    placeholder.classList.remove('is-active');
  }
}

export function updateSoundList(sound) {
  soundList.push(sound);
}
export function updateAudioMap(title, sound) {
  audioMap.set(title, sound);
}
