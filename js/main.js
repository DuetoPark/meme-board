import data from './meme.json' assert { type: 'json' };

export let lastSound = null;
export let audioMap = new Map();

const MAX = data.length;
const MIN = 0;

let soundList = [];

export function updateSoundList(sound) {
  soundList.push(sound);
}
export function updateAudioMap(title, sound) {
  audioMap.set(title, sound);
}
