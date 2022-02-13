export default class Modal {
  constructor(modal) {
    this.modal = document.querySelector(modal);

    this.closeButton = this.modal.querySelector('.close-button');
    this.closeButton.addEventListener('click', this.close);

    this.overlay = document.querySelector('.overlay');
    this.overlay.addEventListener('click', this.close);
  }

  setOpenListener(openListener) {
    this.openListener = openListener;
  }

  open = () => {
    this.modal.classList.add('is-active');
    this.overlay.classList.add('is-active');
    this.openListener && this.openListener();
  };

  close = () => {
    this.modal.classList.remove('is-active');
    this.overlay.classList.remove('is-active');
  };
}
