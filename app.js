const form = document.querySelector('#form');
const email = document.querySelector('#email');

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function submit(e) {
  e.preventDefault();
  if(validateEmail(email.value)) {
    form.innerHTML = `<p>Okay, we'll let you know.</p>`;
  } else {
    const errorMessage = document.createElement('small');

    form.classList.add('error');
    errorMessage.classList.add('error-message');
    errorMessage.innerText = 'Please provide a valid email address';
    email.after(errorMessage);
    
    email.addEventListener('keydown', () => {
      const errorMessageEl = document.querySelector('.error-message');
      form.classList.remove('error');
      errorMessageEl.remove();
    })
  }
}

form.addEventListener('submit', submit);