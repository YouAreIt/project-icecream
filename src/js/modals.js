document.addEventListener('DOMContentLoaded', function () {
  const modalButtons = document.querySelectorAll('data-modal-open');
  const overlay = document.querySelector('#backdrop-modal');
  const closeButtons = document.querySelector('data-modal-open');

  modalButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      var modalId = this.getAttribute('data-modal'),
        modalElem = document.querySelector(
          '.modal[data-modal="' + modalId + '"]'
        );

      modalElem.classList.add('active');
      overlay.classList.add('active');
    }); // end click
  }); // end foreach
}); // end ready
/* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом backdrop*/
const modalButtons = document.querySelectorAll('[data-modal-open]');
const backdrop = document.querySelector('[data-backdrop]');
const closeButtons = document.querySelectorAll('[data-modal-close]');

/* Перебираем массив кнопок */
modalButtons.forEach(function (button) {
  /* Назначаем каждой кнопке обработчик клика */
  button.addEventListener('click', function (e) {
    /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */
    e.preventDefault();

    /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
    const modalId = this.dataset.modalOpen;
    const modalElem = document.querySelector(`[data-modal="${modalId}"]`);

    /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
    modalElem.classList.add('active');
    backdrop.classList.add('active');
  }); // end click
}); // end foreach

closeButtons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    var parentModal = this.closest('.js-modal');

    parentModal.classList.remove('active');
    backdrop.classList.remove('active');
  });
}); // end foreach

document.body.addEventListener('keyup', function (event) {
  const key = event.key;

  if (key == 'Escape') {
    document.querySelector('.js-modal.active').classList.remove('active');
    document.querySelector('.backdrop').classList.remove('active');
  }
});

backdrop.addEventListener('click', function (event) {
  if (event.target !== this) {
    return;
  }
  document.querySelector('.js-modal.active').classList.remove('active');
  this.classList.remove('active');
});
