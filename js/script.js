/* Email */
const boxEmail = ["cucu6@gmail.com", "lulu5@gmail.com", "miciostyle@gmail.com", "gattiratti@gmail.com"];
console.log(boxEmail);

const userEmail = prompt('Inserisci la tua email');

/* la prima soluzione */
let isRegistered = false;

for (let i = 0; i < boxEmail.length; i++) {
    if (boxEmail[i] == userEmail) {
        isRegistered = true;
    }
}

if (isRegistered == true) {
    alert('La tua email esiste nel nostro archivio!');
} else {
    alert('Purtroppo la tua email non esiste nel nostro archivio!');
}

/* la seconda soluzione */

/* if (boxEmail.includes(userEmail)) { 
    alert('La tua email esiste nel nostro archivio!');
} else {
    alert('Purtroppo la tua email non esiste nel nostro archivio!');
} */



/* Dadi */

const buttonRandom = document.querySelector('button');
buttonRandom.addEventListener('click', function() {
    let userNumber = Math.floor(Math.random() * 7);
    document.getElementById('user').innerHTML += userNumber;
    console.log(userNumber);

    let computerNumber = Math.floor(Math.random() * 7);
    document.getElementById('computer').innerHTML += computerNumber;
    console.log(computerNumber);

    if (userNumber > computerNumber) {
        alert('Hai vinto tu!');
    } else if (computerNumber > userNumber) {
        alert('Ho vinto io!');
    } else {
        alert('..click me ancora..');
    }
}
);

const buttonCancel = document.getElementById('button-cancel');
buttonCancel.addEventListener('click', function() {
    userNumber = '';
    document.getElementById('user').innerHTML = userNumber;
    
    computerNumber = '';
    document.getElementById('computer').innerHTML = computerNumber;
})