// Il software deve chiedere per 10 volte all’utente di inserire un numero.Il programma stampa la somma di tutti i numeri inseriti.

// Ciclo For

let somma = 0;

for (let i = 0; i < 10; i++) {
    const number = parseInt(prompt('inserisci il '+ (i + 1) + '° numero: '));
    somma += number;
}

console.log(somma);

// Ciclo While

let somma = 0;
let i = 0;

while (i < 10) {
    const number = parseInt(prompt('inserisci il ' + (i + 1) + '° numero:'));
    somma += number;
    i++;
}

console.log(somma);