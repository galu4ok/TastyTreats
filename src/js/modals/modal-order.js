const refs = {
  openModalOrderBtn: document.querySelector('[data-modal-order-open]'),
  closeModalOrderBtn: document.querySelector('[data-modal-order-close]'),
  modalOrder: document.querySelector('[modal-order-form__button]'),
  modalOrderForm: document.querySelector('.modal-order-form'),
};

refs.openModalOrderBtn.addEventListener('click', toggleModal);
refs.closeopenModalOrderBtn.addEventListener('click', toggleModal);
refs.modalOrderForm.addEventListener('input', onTextareaInput);
refs.modalOrderForm.addEventListener('submit', throttle(onFormSubmit, 500));

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}
function onTextareaInput(evt) {
  const { email, message } = evt.currentTarget.elements;
  const feedbackFormState = {
    email: email.value.trim(),
    message: message.value,
  };

  onClickPageReload();

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}
function onClickPageReload() {
  const storageData =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  const { email, message } = storageData;
  if (storageData) {
    refs.modalOrderForm.elements.email.value = email || '';
    refs.modalOrderForm.elements.message.value = message || '';
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();

  const { email, message } = evt.currentTarget.elements;

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }

  console.log({
    email: email.value.trim(),
    message: message.value,
  });

  localStorage.removeItem('feedback-form-state');
  evt.currentTarget.reset();
}
