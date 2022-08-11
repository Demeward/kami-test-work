const toggleMenuBtn = document.querySelector('[data-toggle-menu]');
const navMenu = document.querySelector('[data-menu]');

const toggleProductsMenuBtn = document.querySelector('[data-toggle-products-menu]');
const productsMenu = document.querySelector('[data-products-menu]');

const overlay = document.querySelector('[data-overlay]');

const onClickToggle = (btn, ...elements) => {
  btn.addEventListener('click', () => {
    for (let elem of elements) {
      elem.classList.toggle('is-active');
    }
  });
};

const initToggle = () => {
  onClickToggle(toggleMenuBtn, navMenu, overlay);

  document.addEventListener('keydown', (evt) => {
    const isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

    if (isEscKey && navMenu.classList.contains('is-active')) {
      evt.preventDefault();
      navMenu.classList.remove('is-active');
      overlay.classList.remove('is-active');
    }
  });

  onClickToggle(overlay, navMenu, overlay);

  toggleProductsMenuBtn.addEventListener('click', () => {
    productsMenu.classList.toggle('is-active');
  });

  document.body.addEventListener('click', (evt) => {
    if (!evt.target.closest('[data-products-menu]') && productsMenu.classList.contains('is-active')) {
      productsMenu.classList.remove('is-active');
    }
  });
};

export {initToggle};
