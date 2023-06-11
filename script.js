function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const value = data.get("email");
  console.log(value);

  if (
    !value ||
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) === false
  ) {
    const errorSpanElemetn = document.getElementById("error_span");
    const inputElement = document.getElementById("email");

    errorSpanElemetn.classList.remove("hidden");

    inputElement.classList.add("error_email");
    inputElement.value = "";

    setTimeout(() => {
      inputElement.classList.remove("error_email");
      errorSpanElemetn.classList.add("hidden");
    }, 3000);
  } else {
    
  }
}
