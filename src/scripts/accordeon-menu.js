(function () {
  var menuAccordeon = document.querySelector('.menu-acco');

  menuAccordeon.addEventListener('click', function (e) {
    e.preventDefault();

    var menuAccoItem = document.querySelectorAll('.menu-acco__item');
    var target = e.target.closest('li');

    if (!target) return;

    if (!target.classList.contains('menu-acco__item--active')) {
      for (var card of menuAccoItem) {
        card.classList.remove('menu-acco__item--active');
      }
      target.classList.add('menu-acco__item--active');
    } else {
      target.classList.remove('menu-acco__item--active');
    }
  });
})()
