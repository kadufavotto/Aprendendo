alert("Boas vindas ao calendário");

let FinalDeSemana = ["sabado", "domingo"];
let DiaUtil = ["segunda", "terça", "quarta", "quinta", "sexta"];
let TodosOsDias = FinalDeSemana.concat(DiaUtil); // Junta os dois arrays

let EmQueDiaEstamos = "";

while (true) {
    EmQueDiaEstamos = prompt("Em que dia estamos?").toLowerCase();

    if (TodosOsDias.includes(EmQueDiaEstamos)) {
        break; // Sai do loop se o dia for válido
    }

    alert("Dia inválido! Digite um dia da semana válido, como: segunda, terça, quarta...");
}

if (FinalDeSemana.includes(EmQueDiaEstamos)) {
    alert("Ótimo final de semana!");
} else {
    alert("Ótima semana!");
}