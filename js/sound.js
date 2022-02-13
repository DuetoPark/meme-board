'use strict';

export function play(audio) {
  audio.play();
}

export function stop(audio) {
  audio.pause();
  audio.currentTime = 0;
}
