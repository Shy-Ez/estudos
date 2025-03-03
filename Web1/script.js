document.addEventListener("DOMContentLoaded", function () {
    verificarAdmin();
    checkLogin();
    aplicarPreferencias();
    loadUsers();
});

let userBeingEdited = null; // Variável para armazenar o índice do usuário sendo editado

// ✅ Criar admin automaticamente ao carregar o site
function verificarAdmin() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let adminExists = users.some(user => user.email === "admin@freedom.com");

    if (!adminExists) {
        users.push({
            username: "Administrador",
            email: "admin@freedom.com",
            birthdate: "2000-01-01",
            password: "Adminteste1",
            profilePic: "",
            isAdmin: true
        });
        localStorage.setItem("users", JSON.stringify(users));
    }
}
function trocarTema() {
            let body = document.body;
            let botao = document.querySelectorAll(".botao");

            if (body.style.backgroundColor === "white") {
                body.style.backgroundColor = "#111";
                body.style.color = "white";
                botao.forEach(btn => btn.style.color = "white");
            } else {
                body.style.backgroundColor = "white";
                body.style.color = "red";
                botao.forEach(btn => btn.style.color = "black");
            }
}

// ✅ Alternar Tema e Salvar Preferência
function toggleTheme() {
    document.body.classList.toggle("light-mode");
    let currentTheme = document.body.classList.contains("light-mode") ? "light" : "dark";
    localStorage.setItem("theme", currentTheme);
}

// ✅ Exibir corretamente as informações no Perfil
function toggleProfile() {
    let profileContainer = document.getElementById("profile-container");
    let userEmail = localStorage.getItem("loggedInUser");
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(user => user.email === userEmail);

    if (user) {
        document.getElementById("profile-name").innerText = "Nome: " + user.username;
        document.getElementById("profile-email").innerText = "Email: " + user.email;
        document.getElementById("profile-birthdate").innerText = "Data de nascimento: " + user.birthdate;
        document.getElementById("profile-picture").src = user.profilePic && user.profilePic !== "" ? user.profilePic : "default.png";
    }

    profileContainer.classList.toggle("hidden");
}

// ✅ Fechar qualquer interface ao clicar no botão "X"
function closeContainer(containerId) {
    document.getElementById(containerId).classList.add("hidden");
}

// ✅ Verificar data de nascimento válida
function validarDataNascimento(dataNascimento) {
    let hoje = new Date();
    let dataNasc = new Date(dataNascimento);
    let idade = hoje.getFullYear() - dataNasc.getFullYear();
    
    if (dataNasc > hoje) {
        alert("A data de nascimento não pode ser no futuro.");
        return false;
    }
    
    if (idade > 120) {
        alert("A data de nascimento não pode ser superior a 120 anos no passado.");
        return false;
    }
    								return true;
}

// ✅ Cadastrar usuários corretamente
function cadastrar() {
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let birthdate = document.getElementById("birthdate").value.trim();
    let password = document.getElementById("password").value.trim();
    let file = document.getElementById("file").files[0];

    if (!validarDataNascimento(birthdate)) return;
    
    if (!email.includes("@") || !email.includes(".com")) {
        alert("Email inválido!");
        return;
    }

    if (!/[A-Z]/.test(password)) {
        alert("A senha deve conter pelo menos uma letra maiúscula!");
        return;
    }
    
    if (!file) {
        alert("Por favor, selecione uma foto para o perfil.");
        return;
    }


    let reader = new FileReader();
    reader.onload = function (event) {
        let profilePic = event.target.result || "";
        let users = JSON.parse(localStorage.getItem("users")) || [];

        users.push({ username, email, birthdate, password, profilePic, isAdmin: false });

        localStorage.setItem("users", JSON.stringify(users));
        alert("Cadastro realizado com sucesso!");
        window.location.href = "login.html";
    };

    if (file) {
        reader.readAsDataURL(file);
    } else {
        localStorage.setItem("users", JSON.stringify(users));
        alert("Cadastro realizado com sucesso!");
        window.location.href = "login.html";
    }
}

// ✅ Login corrigido e autenticando corretamente
function login() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    let user = users.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem("loggedInUser", email);
        setTimeout(() => {
            window.location.href = "index.html";
        }, 500);
    } else {
        alert("Email ou senha incorretos!");
    }
}

// ✅ Verificar se o usuário está logado corretamente
function checkLogin() {
    let userEmail = localStorage.getItem("loggedInUser");

    if (!userEmail) {
        if (window.location.pathname.includes("index.html")) {
            window.location.href = "login.html";
        }
    } else {
        document.getElementById("main-container").classList.remove("hidden");
    }
}

// ✅ Carregar usuários na tabela de Clientes Cadastrados
function loadUsers() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let tableBody = document.getElementById("user-table");
    tableBody.innerHTML = "";

    users.forEach((user, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
        
            <td>${user.username}</td>
        
          						<td>${user.email}</td>
        
        
            <td>
                <button onclick="editUser(${index})">Editar</button>
                <button onclick="deleteUser(${index})">Excluir</button>
            </td>
        
        `;
        tableBody.appendChild(row);
    });
}

// ✅ Exibir informações do usuário sendo editado
function editUser(index) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    userBeingEdited = index;
    let user = users[index];

    document.getElementById("edit-username").value = user.username;
    document.getElementById("edit-email").value = user.email;
    document.getElementById("edit-birthdate").value = user.birthdate;
    document.getElementById("edit-password").value = user.password;

    document.getElementById("edit-user-container").classList.remove("hidden");
}

// ✅ Salvar edição de usuário corretamente
function saveUserEdit() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (userBeingEdited === null) return;

    users[userBeingEdited].username = document.getElementById("edit-username").value;
    users[userBeingEdited].email = document.getElementById("edit-email").value;
    users[userBeingEdited].birthdate = document.getElementById("edit-birthdate").value;
    users[userBeingEdited].password = document.getElementById("edit-password").value;

    let file = document.getElementById("edit-profile-pic").files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function (event) {
            users[userBeingEdited].profilePic = event.target.result;
            localStorage.setItem("users", JSON.stringify(users));
            alert("Usuário atualizado com sucesso!");
            closeEditUser();
            loadUsers();
        };
        reader.readAsDataURL(file);
    } else {
        localStorage.setItem("users", JSON.stringify(users));
        alert("Usuário atualizado com sucesso!");
        closeEditUser();
        loadUsers();
    }
}

// ✅ Fechar Modal de Edição automaticamente ao salvar
function closeEditUser() {
    document.getElementById("edit-user-container").classList.add("hidden");
    userBeingEdited = null;
}

// ✅ Logout funcionando corretamente
function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}

// ✅ Alternar visibilidade da seção de Configurações
function toggleConfig() {
    document.getElementById("config-container").classList.toggle("hidden");
}

// ✅ Excluir Usuário
function deleteUser(index) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    loadUsers();

}
// ✅ Alternar visibilidade da seção de Clientes Cadastrados
function toggleClients() {
    document.getElementById("clients-container").classList.toggle("hidden");
    loadUsers();
}