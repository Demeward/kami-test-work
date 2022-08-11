import {setupModal} from '../utils/modal';

const modals = document.querySelectorAll('.modal');
const modalCallback = document.querySelector('.modal--callback');
const modalCallbackBtns = document.querySelectorAll('[data-modal="callback"]');

const initModals = () => {
  window.addEventListener('load', () => {
    if (modals.length) {
      modals.forEach((el) => {
        setTimeout(() => {
          el.classList.remove('modal--preload');
        }, 100);
      });
    }
  });

  if (modalCallback && modalCallbackBtns.length) {
    setupModal(modalCallback, false, modalCallbackBtns, true, false);
  }
};

export {initModals};
