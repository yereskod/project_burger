(function () {
  var teamAccordeon = document.querySelector('.team-acco');

  teamAccordeon.addEventListener('click', function (e) {
    e.preventDefault();

    var teamAccoItem = document.querySelectorAll('.team-acco__item');
    var target = e.target.closest('li');

    if (!target) return;

    if (!target.classList.contains('team-acco__item--active')) {
      for (var card of teamAccoItem) {
        card.classList.remove('team-acco__item--active');
      }
      target.classList.add('team-acco__item--active');
    } else {
      target.classList.remove('team-acco__item--active');
    }
  });
})()
