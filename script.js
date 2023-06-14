function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const value = data.get("email");

  if (
    !value ||
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) === false
  ) {
    const errorSpanElement = document.getElementById("error_span");
    const inputElement = document.getElementById("email");

    errorSpanElement.classList.remove("hidden");

    inputElement.classList.add("error_email");
    inputElement.value = "";

    setTimeout(() => {
      inputElement.classList.remove("error_email");
      errorSpanElement.classList.add("hidden");
    }, 3000);
  } else {
    const successElement = document.querySelector(".success");
    const signUpElement = document.querySelector(".sign-up");
    const emailSpanElement = document.getElementById("email_span");

    signUpElement.style.animation = "fadeOut 1s";

    emailSpanElement.innerHTML = value;

    setTimeout(() => {
      successElement.classList.remove("hidden");
      signUpElement.classList.add("hidden");
      successElement.style.animation = "fadeIn 1s";
    }, 1000);
  }
}