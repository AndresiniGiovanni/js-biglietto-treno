// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

let percorso = parseInt(prompt("quanti km devi percorrere ?"));
let eta = parseInt(prompt("qual'é l'etá del passeggero?"));

console.log(percorso);
console.log(eta);

let costoKm = parseFloat(percorso * 0.21).toFixed(2);
console.log(costoKm);

let percentuale;
if (eta < 18) {
  percentuale = parseFloat(costoKm * 0.8).toFixed(2);

  console.log(percentuale);
} else if (eta > 65) {
  percentuale = parseFloat(costoKm * 0.6).toFixed(2);

  console.log(percentuale);
} else {
  percentuale = costoKm;

  console.log(percentuale);
}

document.getElementById("calcolo").innerHTML = percentuale;
