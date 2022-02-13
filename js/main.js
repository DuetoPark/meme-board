import data from './meme.json' assert { type: 'json' };
import Control from './header-button.js';
import * as sound from './sound.js';

export let lastSound = null;
export let audioMap = new Map();

const MAX = data.length;
const MIN = 0;

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
export function updateSoundList(sound) {
  soundList.push(sound);
}
export function updateAudioMap(title, sound) {
  audioMap.set(title, sound);
}
