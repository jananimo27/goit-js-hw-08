import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const saveFormData = throttle(() => {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}, 500);

const populateForm = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const formData = JSON.parse(savedData);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
};

form.addEventListener('input', saveFormData);
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY))); // Log current form data to the console
  localStorage.removeItem(STORAGE_KEY); // Clear local storage
  form.reset(); // Reset form fields
});


document.addEventListener('DOMContentLoaded', populateForm);
