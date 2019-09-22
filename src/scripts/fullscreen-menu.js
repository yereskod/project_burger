(function () {
  var hamburgerMenu = document.querySelector('#hamburgerMenu');
  var hamburgerButton = document.querySelector('#hamburgerButton');
  var menuItems = document.querySelectorAll('.nav__link');

  function openHamburgerMenu() {
    hamburgerMenu.classList.add('active');
    hamburgerButton.classList.add('is-active');
  }
  function closeHamburgerMenu() {
    hamburgerMenu.classList.remove('active');
    hamburgerButton.classList.remove('is-active');
  }

  hamburgerButton.addEventListener('click', function (e) {
    e.preventDefault();
    if (hamburgerButton.classList.contains('is-active')) {
      closeHamburgerMenu();
    } else {
      openHamburgerMenu();
    }
  });

  hamburgerMenu.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(e.target);
    if (e.target.classList.contains('nav__link')) {
      closeHamburgerMenu();
    }
  })
})()




