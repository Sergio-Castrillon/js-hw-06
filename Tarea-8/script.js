const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Porfavor llene todos los campos');
  }

  const userData = {
    email: email.value,
    password: password.value,
  };

  console.log(userData);
  form.reset();
}
