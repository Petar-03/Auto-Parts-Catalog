//form validation
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const selectInput = document.getElementById("select");
const messageInput = document.getElementById("message");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let confirmName = false;
  let confirmEmail = false;
  let confirmSelect = false;
  let confirmMessage = false;

  formMessage.classList.remove("success");
  formMessage.classList.remove("error");

  if (nameInput.value !== "") {
    confirmName = true;
  } else {
    confirmName = false;
    formMessage.textContent = "Моля, въведете име.";
    formMessage.classList.add("error");
  }

  if (emailInput.value !== "") {
    if (emailInput.value.includes("@") && emailInput.value.includes(".")) {
      confirmEmail = true;
    } else {
      confirmEmail = false;
      formMessage.textContent = "Моля, въведете валиден E-mail.";
      formMessage.classList.add("error");
    }
  } else {
    confirmEmail = false;
    formMessage.textContent = "Моля, въведете E-mail.";
    formMessage.classList.add("error");
  }

  if (selectInput.value !== "") {
    confirmSelect = true;
  } else {
    confirmSelect = false;
    formMessage.textContent = "Моля, изберете тема.";
    formMessage.classList.add("error");
  }

  if (messageInput.value !== "") {
    if (messageInput.value.length >= 10) {
      confirmMessage = true;
    } else {
      confirmMessage = false;
      formMessage.textContent =
        "Съобщението трябва да съдържа поне 10 символа.";
      formMessage.classList.add("error");
    }
  } else {
    confirmMessage = false;
    formMessage.textContent = "Моля, въведете съобщение.";
    formMessage.classList.add("error");
  }

  if (
    confirmName === true &&
    confirmEmail === true &&
    confirmSelect === true &&
    confirmMessage === true
  ) {
    formMessage.textContent = "Формата бе изпратена успешно!";
    formMessage.classList.add("success");

    form.reset();
  }
});
