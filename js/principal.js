let titulo = document.querySelector(".titulo");
titulo.textContent = "Haha";

let pacientes = document.querySelectorAll(".paciente");

for(let i = 0; i < pacientes.length; i++){

    let paciente = pacientes[i];
    console.log(pacientes[i]);

    let tdPeso = paciente.querySelector(".info-peso");

let peso = tdPeso.textContent;
let tdAltura = paciente.querySelector(".info-altura");
let altura = tdAltura.textContent;
let tdImc = paciente.querySelector(".info-imc");

let pesoValido = true;
let alturaValida = true;
if(peso < 0 || peso > 1000){
    console.log("Peso Invalido");
    pesoValido = false;
    tdImc.textContent = ("Peso Invalido");
    paciente.classList.add("paciente-invalido");
}

if (altura < 0 || altura > 1000){
    console.log("invalida");
    alturaValida = false;
    tdAltura.textContent = ("Invalida")
    paciente.classList.add("paciente-invalido");
}

if(altura && pesoValido){
    let imc = peso / (altura* altura);
    tdImc.textContent = imc;
}
}

// Adicionando escutador de eventos

let botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); // previnindo o comportamento padrao do botao //

    let form = document.querySelector("#form-add");

    let nome = form.nome.value;
    let peso = form.peso.value;
    let altura = form.altura.value;
    let gordura = form.gordura.value;

    let pacienteTr = document.createElement("tr");

    let nomeTd = document.createElement("td")
    let pesoTd = document.createElement("td")
    let alturaTd = document.createElement("td")
    let gorduraTd = document.createElement("td")
    let imcTd = document.createElement("td")

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(gorduraTd);

    let tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

})