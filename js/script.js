/* Email */
const boxEmail = ["cucu6@gmail.com", "lulu5@gmail.com", "miciostyle@gmail.com", "gattiratti@gmail.com"];
console.log(boxEmail);

const userEmail = prompt('Inserisci la tua email');
console.log(userEmail);

if (boxEmail.includes(userEmail)) { 
    alert('La tua email esiste nel nostro archivio!');
} else {
    alert('Purtroppo la tua email non esiste nel nostro archivio!');
}

