import { audioMap, lastSound } from './main.js';
import * as sound from './sound.js';

export default class MemeButton {
  constructor(wrapper) {
    this.wrapper = document.querySelector(wrapper);
    this.wrapper.addEventListener('click', this.handleAudio);

    this.field = document.querySelector('.meme-board-field');
  }

  setPlayListener(onAudioPlay) {
    this.onAudioPlay = onAudioPlay;
  }

  setClickListener(onMemeButtonClick) {
    this.onMemeButtonClick = onMemeButtonClick;
  }

  handleAudio = () => {
    const target = event.target;
    const title = target.dataset.title;
    if (!title) return;
    const currentAudio = audioMap.get(title);

    this.stopLastAudio();
    this.playCurrentAudio(currentAudio);

    this.onMemeButtonClick && this.onMemeButtonClick(title);
  };

  stopLastAudio() {
    lastSound && sound.stop(lastSound);
  }

  playCurrentAudio(audio) {
    sound.play(audio);
    this.onAudioPlay && this.onAudioPlay(audio);
  }
}
