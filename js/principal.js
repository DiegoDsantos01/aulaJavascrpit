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