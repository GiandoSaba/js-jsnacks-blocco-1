// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const invitati = ['Nicola', 'Marco', 'Luca', 'Francesco', 'Emanuele', 'Giando'];

const nameUser = prompt('Inserisci il tuo nome');

let find = false;

// CICLO FOR

// for (let i = 0; i < invitati.length; i++) {
//     if (invitati[i] == nameUser) {
//         find = true;
//     }
// }


// CICLO WHILE

let i = 0;

while (!find && i < invitati.length) {
    if (invitati[i] == nameUser) {
        find = true;
    }
    i++;
}



if (find) {
    alert("Puoi entrare all'evento");
} else {
    alert("Non puoi entrare all'evento");
}