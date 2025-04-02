function registerUser(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;


  if (password !== confirmPassword) {
    alert("As senhas não coincidem!");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userExists = users.some((user) => user.email === email);

  if (userExists) {
    alert("E-mail já cadastrado!");
    return;
  }

  users.push({ email, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Cadastro realizado com sucesso!");
  window.location.href = "index.html";
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
