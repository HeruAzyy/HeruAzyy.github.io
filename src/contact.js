const scriptURL =
  'https://script.google.com/macros/s/AKfycbyYWbXlZxdrwaKBjqkmSIChqfKDI9dz0rNbqohkeUsVyvsZThwrfsr_wYNw5p3ZChtxOw/exec';
const form = document.forms['heru-azy-contact-form'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const textAlert = document.querySelector('.text-alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  btnLoading.classList.toggle('hidden');
  btnKirim.classList.toggle('hidden');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle('hidden');
      btnKirim.classList.toggle('hidden');
      alert('Terimakasih. Pesan anda sudah saya terima✨');
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});
