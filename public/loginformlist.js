const formLogin = document.querySelector(".login-form");
const emailInput = document.querySelector(".login-email");
const passwordInput = document.querySelector(".login-password");
const formAlert = document.querySelector(".form-alert");

formLogin.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;
  try {
    const result = await axios.post("/api/forms/login", {
      email: email,
      password: password,
    });
    console.log(result);
    window.alert(`Successfully login...`);
    emailInput.value = "";
    passwordInput.value = "";
    formAlert.innerHTML = `success it works!!`;
  } catch (err) {
    formAlert.style.display = "block";
    formAlert.innerHTML = ` There was an error..... <br> ${err}`;
  }
});
