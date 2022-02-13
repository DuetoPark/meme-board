import data from './meme.json' assert { type: 'json' };
import { updateSoundList, updateAudioMap } from './main.js';

const memeDetail = document.querySelector('.meme-detail');
const memeDetailTitle = memeDetail.querySelector('.meme-detail-title dd');
const memeDetailReference = memeDetail.querySelector(
  '.meme-detail-reference dd'
);

const listModalAudioList = document.querySelector(
  '.meme-list-modal .meme-audio-list'
);

data.forEach((data) => {
  const url = data.url;
  const title = data.title;
  const reference = data.reference;

  const sound = new Audio(`./assets/audio/${reference}/${url}`);
  sound.setAttribute('title', title);

  updateSoundList(sound);
  updateAudioMap(title, sound);
  addListItem(title);

  sound.addEventListener('ended', hideMemeDetail);
  sound.addEventListener('pause', hideMemeDetail);
  sound.addEventListener('play', () => {
    showMemeDetail();
    updateDetail(title, reference);
  });
});

function addListItem(text) {
  const li = document.createElement('li');
  li.setAttribute('class', 'meme-audio-item');
  li.innerHTML = `
    <button
      class="btn-36 btn-secondary meme-button"
      type="button"
      data-title="${text}"
    >
      <strong>${text}</strong>
    </button>
  `;
  listModalAudioList.appendChild(li);
}

function updateDetail(title, reference) {
  memeDetailTitle.textContent = title;
  memeDetailReference.textContent = reference;
}

function hideMemeDetail() {
  memeDetail.classList.remove('is-active');
}

function showMemeDetail() {
  memeDetail.classList.add('is-active');
}
