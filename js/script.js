// Parola corta
var wordfirst = prompt ('Inserisci una parola casuale');
var wordsecond = prompt ('Inserisci una parola casuale');

var longfirst = wordfirst.length;
var longsecond = wordsecond.length;

if(longfirst > longsecond){
    // vince first
}

else if (longsecond > longfirst){
    // vince second
}

else{
    // parità
}


document.getElementById('parola').innerHTML = wordfirst + wordsecond;

// Somma
var sum = 0;

for (var i = 0; i < 5; i ++){
    numbersum = parseInt(prompt('Inserisci un numero da sommare'));

    // sum = sum + numbersum;

    sum += numbersum;
}

document.getElementById('somma').innerHTML +=  sum;

// Numero dispari
for(i = 0; i < 6; i ++){
    var number = prompt ('Inserisci un numero');
    if (number % 2 == 0){
        console.log ("This number is even.");
    }
    
    else{
        document.getElementById('numero').innerHTML +=  number;
    }
}
