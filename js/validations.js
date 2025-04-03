function registerUser(event) {
  event.preventDefault();

  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;
  const confirmPassword = document.getElementById(
    "register-confirm-password"
  ).value;
  const errorMessage = document.getElementById("register-error-message");
  const successModal = document.getElementById("success-modal");
  const goToLoginButton = document.getElementById("go-to-login");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validação: Todos os campos são obrigatórios
  if (email === "" || password === "" || confirmPassword === "") {
    errorMessage.textContent = "Todos os campos são obrigatórios";
    errorMessage.style.display = "block";
    return;
  }

  if (password === " ") {
    errorMessage.textContent = "Senha é obrigatória";
    errorMessage.style.display = "block";
    return;
  }

  if (password.length < 8) {
    errorMessage.textContent = "Sua senha deve ter no mínimo 8 caracteres";
    errorMessage.style.display = "block";
    return;
  }

  if (!emailRegex.test(email)) {
    errorMessage.textContent = "E-mail inválido";
    errorMessage.style.display = "block";
    return;
  }

  if (confirmPassword === " ") {
    errorMessage.textContent = "Confirmar senha é obrigatório";
    errorMessage.style.display = "block";
    return;
  }

  if (password !== confirmPassword) {
    errorMessage.textContent = "As senhas devem ser iguais";
    errorMessage.style.display = "block";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userExists = users.some((user) => user.email === email);

  if (userExists) {
    errorMessage.textContent = "E-mail já cadastrado!";
    errorMessage.style.display = "block";
    return;
  }

  users.push({ email, password });
  localStorage.setItem("users", JSON.stringify(users));

  errorMessage.style.display = "none";
  successModal.classList.remove("hidden");
  goToLoginButton.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}

function loginUser(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const sucessMessage = document.getElementById("success-message");
  const errorMessage = document.getElementById("error-message");

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (email === "" || password === "") {
    errorMessage.textContent = "Todos os campos são obrigatórios";
    errorMessage.style.display = "block";
    return;
  }

  if (password.length < 8) {
    errorMessage.textContent = "Sua senha deve ter no mínimo 8 caracteres";
    errorMessage.style.display = "block";
    return;
  }

  if (!user) {
    errorMessage.textContent = "E-mail ou senha inválidos";
    errorMessage.style.display = "block";
    return;
  }

  sucessMessage.textContent = "Dados Ok";
  sucessMessage.style.display = "block";
  errorMessage.style.display = "none";

  setTimeout(() => {
    window.location.href = "main.html";
  }, 2000);
}
