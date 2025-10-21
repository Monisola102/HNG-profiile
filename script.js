const form = document.querySelector('[data-testid="test-contact-form"]');
const nameInput = document.querySelector('[data-testid="test-contact-name"]');
const emailInput = document.querySelector('[data-testid="test-contact-email"]');
const subjectInput = document.querySelector(
  '[data-testid="test-contact-subject"]'
);
const messageInput = document.querySelector(
  '[data-testid="test-contact-message"]'
);
const errorName = document.querySelector(
  '[data-testid="test-contact-error-name"]'
);
const errorEmail = document.querySelector(
  '[data-testid="test-contact-error-email"]'
);
const errorSubject = document.querySelector(
  '[data-testid="test-contact-error-subject"]'
);
const errorMessage = document.querySelector(
  '[data-testid="test-contact-error-message"]'
);
const successMsg = document.querySelector(
  '[data-testid="test-contact-success"]'
);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
form.addEventListener("submit", function (e) {
  e.preventDefault();
  errorName.textContent = "";
  errorEmail.textContent = "";
  errorSubject.textContent = "";
  errorMessage.textContent = "";
  successMsg.textContent = "";

  let isValid = true;

  if (!nameInput.value.trim()) {
    errorName.textContent = "Name is required.";
    isValid = false;
  }

  if (!emailInput.value.trim()) {
    errorEmail.textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    errorEmail.textContent = "Email format is invalid.";
    isValid = false;
  }

  if (!subjectInput.value.trim()) {
    errorSubject.textContent = "Subject is required.";
    isValid = false;
  }

  if (!messageInput.value.trim()) {
    errorMessage.textContent = "Message is required.";
    isValid = false;
  } else if (messageInput.value.trim().length < 10) {
    errorMessage.textContent = "Message must be at least 10 characters.";
    isValid = false;
  }
  if (isValid) {
    successMsg.textContent = "Your message has been sent successfully!";
    form.reset();
  }
});
