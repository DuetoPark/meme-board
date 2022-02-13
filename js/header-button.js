import Modal from './modal.js';

export default class Control {
  constructor() {
    this.header = document.querySelector('.meme-board-header');
    this.detail = document.querySelector('.meme-detail');
    this.field = document.querySelector('.meme-board-field');

    this.modal = new Modal('.meme-list-modal');
    this.modalButton = this.header.querySelector(' button.is-list');
    this.modalButton.addEventListener('click', this.modal.open);

    this.pauseButton = this.header.querySelector('button.is-pause');
    this.pauseButton.addEventListener('click', this.hideDetail);

    this.clearButton = this.header.querySelector('button.is-clear');
    this.clearButton.addEventListener('click', this.clearField);
  }

  setPauseListener(onPauseButtonClick) {
    this.onPauseButtonClick = onPauseButtonClick;
  }

  setClearListener(onClearButtonClick) {
    this.onClearButtonClick = onClearButtonClick;
  }

  hideDetail = () => {
    this.detail.classList.remove('is-active');
    this.onPauseButtonClick && this.onPauseButtonClick();
  };

  clearField = () => {
    const fieldLastChild = this.field.lastElementChild;
    if (fieldLastChild.matches('.placeholder')) return;

    this.clear();
  };

  clear() {
    this.onClearButtonClick && this.onClearButtonClick();

    if (!window.confirm('화면의 모든 밈 버튼를 삭제할까요?')) return;

    this.init();
  }

  init() {
    this.field.innerHTML = `
    <p class="placeholder is-active">
      아무 키를 누르면, 밈 비가 내린다 <br />
      -마법사 🪄
    </p>`;
  }
}
