addEventListener("DOMContentLoaded", validateEmail);

function validateEmail() {
  const emailInput = document.getElementById("email");
  const errorAlert = document.querySelector(".alert");
  const errorIcon = document.querySelector(".incorrect");
  const submitBtn = document.querySelector(".submit-btn");

  const submitEmail = () => {
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailFormat.test(emailInput.value)) {
      emailOutput("success", "success");
      emailInput.value = "";
    } else {
      emailOutput("Please provide a valid email", "error");
    }
  };

  function emailOutput(text, style) {
    errorAlert.innerHTML = text;
    errorAlert.classList.add(style);
    errorAlert.setAttribute("aria-hidden", "false");
    errorIcon.classList.add(style);

    setTimeout(() => {
      errorAlert.classList.remove(style);
      errorAlert.setAttribute("aria-hidden", "true");
      errorIcon.classList.remove(style);
    }, 1000);
  }

  // event listener
  submitBtn.addEventListener("click", submitEmail);
}
