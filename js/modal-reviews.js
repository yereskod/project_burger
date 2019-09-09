var modalRev = document.querySelector('.popup-reviews');
    modalTitle = document.querySelector('.popup-reviews__title');
    modalText = document.querySelector('.popup-reviews__text');
const revList = document.querySelector('.reviews__list');
      revClose = document.querySelector('.popup-reviews__close');
revClose.addEventListener('click', function(e) {
  e.preventDefault();
  modalRev.style.display = 'none';
  document.body.style.overflow = 'initial';
});

revList.addEventListener('click', function(e) {
  e.preventDefault();
  var target = e.target.closest('button');
  if (!target) return;
    modalRev.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    modalTitle.innerText = target.parentNode.firstChild.nextSibling.textContent;
    modalText.innerText = target.parentNode.firstChild.nextSibling.nextSibling.nextSibling.textContent;
  });