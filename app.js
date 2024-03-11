const diaInput = document.getElementById("dia");
const mesInput = document.getElementById("mes");
const anoInput = document.getElementById("ano");

const diaResposta = document.getElementById("DD");
const mesResposta = document.getElementById("MM");
const anoResposta = document.getElementById("AA");

const form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

const date = new Date();
let dia = date.getDate();
let mes = date.getMonth();
let ano = date.getFullYear();

const meses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 31, 31];

function validar() {
    const inputs = document.querySelectorAll("input");
    let valido = true;
    inputs.forEach((i) => {
        const parent = i.parentElement;
        if (!i.value) {
            i.style.borderColor = "red";
            parent.querySelector("small").innerText = "Campo obrigatório!";
            valido = false;
        } else if (mesInput.value > 12) {
            mesInput.style.borderColor = "red";
            mesInput.parentElement.querySelector("small").innerText = "Mês inválido!";
            valido = false;
        } else if (diaInput.value > 31) {
            diaInput.style.borderColor = "red";
            diaInput.parentElement.querySelector("small").innerText = "Dia inválido!";
            valido = false;
        } else {
            i.style.borderColor = "black";
            parent.querySelector("small").innerText = "";
            valido = true;
        }
    });
    return valido;
}

function handleSubmit(e) {
    e.preventDefault();
    if (validar()) {
        if (diaInput.value > dia) {
            dia = dia + meses[mes - 1];
            mes = mes - 1;
        }
        if (mesInput.value > mes) {
            mes = mes + 12;
            ano = ano - 1;
        }

        const d = dia - diaInput.value;
        const m = mes - mesInput.value;
        const a = ano - anoInput.value;

        diaResposta.innerHTML = d;
        mesResposta.innerHTML = m;
        anoResposta.innerHTML = a;
        }
}
