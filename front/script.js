const formulario = document.querySelector("form");
const botao = document.querySelector("button");
const Inome = document.querySelector(".nome");
const IuserName = document.querySelector(".userName");
const Iemail = document.querySelector(".email");
const Isenha = document.querySelector(".senha");
const Itelefone = document.querySelector(".telefone");

function cadastrar() {

    fetch("http://localhost:8090/usuarios", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                nomeCompleto: Inome.value,
                userName: IuserName.value,
                email: Iemail.value,
                senha: Isenha.value,
                telefone: Itelefone.value
            })
        })
        .then(function(res) { console.log(res) })
        .catch(function(res) { console.log(res) })
};

function limpar() {
    Inome.value = "";
    IuserName.value = "";
    Iemail.value = "";
    Isenha.value = "";
    Itelefone.value = "";
}

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    cadastrar();
    limpar();
});