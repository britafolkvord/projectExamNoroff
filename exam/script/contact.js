document.getElementById(`faq-trigger`).addEventListener(`click`, function () {
  const content = document.getElementById(`faq-content`);
  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
  } else {
    content.classList.add('hidden');
  }
});

const form = document.getElementById(`contact-form`)


form.addEventListener("submit", function validate(event) {
  event.preventDefault();
  const firstName = document.getElementById(`first-name`).value;
  const lastName = document.getElementById(`last-name`).value;
  const emailAddress = document.getElementById(`email`).value;
  const message = document.getElementById(`message`).value;
  const nameReg = /^[a-zA-Z]+$/;
  const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const messageReg = /\b((?!=|\,|\.).)+(.)\b/g;

  document.querySelectorAll(`.hidden`).forEach(function (element) {
    element.classList.remove(`show`);
  });

  let isValid = true;


  if (!nameReg.test(firstName)) {
    isValid = false;
    document.getElementById(`firstNameError`).classList.add(`show`);
  }
  if (!nameReg.test(lastName)) {
    isValid = false;
    document.getElementById(`lastNameError`).classList.add(`show`);
  }
  if (!emailReg.test(emailAddress)) {
    isValid = false;
    document.getElementById(`emailError`).classList.add(`show`);
  }

  if (!messageReg.test(message)) {
    isValid = false;
    document.getElementById(`messageError`).classList.add(`show`);
  }

  if (isValid) {
    form.innerHTML = `
      <div class="send-confirmation">
      <h2>Your message has been sent <span> ✔ </span> </h2>
      <p>Thank you for reaching out to us. We will get back to you with a reply shortly, so keep an eye out for an email from us in your inbox.
      </p> 
      <a href="launch.html">Take me back to the launch countdown!</a>
      </div>`
  }
}





);