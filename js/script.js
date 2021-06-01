var wordfirst = prompt ();
var wordsecond = prompt ();

var longfirst = wordfirst.length;
var longsecond = wordsecond.length;

if (longfirst === longsecond){
    document.getElementById('lista').innerHTML = 'Sono uguali' + ' ' + wordfirst + ' ' + wordsecond;

}else if (longfirst > longsecond){
    document.getElementById('lista').innerHTML = wordfirst;
    
}else{
    document.getElementById('lista').innerHTML = wordsecond;
}