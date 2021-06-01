// Parola corta
var wordfirst = prompt ('Inserisci una parola casuale');
var wordsecond = prompt ('Inserisci una parola casuale');

var longfirst = wordfirst.length;
var longsecond = wordsecond.length;

document.getElementById('parola').innerHTML = wordfirst + wordsecond;


// Numero dispari
var number = prompt ('Inserisci un numero');
var number = prompt ('Inserisci un numero');
var number = prompt ('Inserisci un numero');
var number = prompt ('Inserisci un numero');
var number = prompt ('Inserisci un numero');
var number = prompt ('Inserisci un numero');

if (number % 2 == 0){
    console.log ("This number is even.");
}

else{
    document.getElementById('numero').innerHTML = number;
}