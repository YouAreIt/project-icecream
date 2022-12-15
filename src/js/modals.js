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
