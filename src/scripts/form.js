(function () {
  const orderForm = document.querySelector('.form__elem');
  const orderButton = document.querySelector('.btn-order');
  const resetButton = document.querySelector('.btn-reset');

  orderButton.addEventListener('click', function (e) {
    e.preventDefault();
    let data = new FormData();
    data.append("name", orderForm.elements.name.value);
    data.append("phone", orderForm.elements.phone.value);
    data.append("comment", orderForm.elements.comment.value);
    data.append("to", "yereskod@gmail.com");
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.send(data);
    xhr.addEventListener('load', () => {
      modalRev.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      modalText.innerText = xhr.response.message;
      modalTitle.style.display = 'none';
    });
  });

  function validateForm(form) {
    let valid = true;
    if (!validateField(form.elements.name)) {
      valid = false;
    }
    if (!validateField(form.elements.phone)) {
      valid = false;
    }
    if (!validateField(form.elements.comment)) {
      valid = false;
    }
    return valid;
  }
  function validateField(field) {
    if (!field.checkValidity()) {
      field.nextElementSibling.textContent = field.validationMessage;
      return false;
    } else {
      field.nextElementSibling.textContent = '';
      return true;
    }
  }
})()
