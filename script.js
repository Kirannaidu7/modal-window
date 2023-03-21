'use strict';

const modal = document.querySelector('.modal');
const hidden = document.querySelectorAll('.hidden');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const name = document.querySelector('.name');
const hideModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const displayModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    if (i === 0) {
      name.textContent = 'kiran';
    } else if (i === 1) {
      name.textContent = 'aditya kiran';
    } else {
      name.textContent = 'aditya padhy';
    }
    displayModal();
  });
}
closeButton.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);
