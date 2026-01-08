//Oppgavesett-5 a, b og c

//Oppgave 1

{
const i = 10;
console.log(`i = ${i}`);
}
// den skriver ut 10 fordi vi har git i verdien 10 og den sak skrive ut verdien

//Oppgave 2

const x = 10;
{
console.log(`i = ${x}`);
}
// her får vi det samme som den forrige

//Oppgave 3

// {
// const y = 10;
// }
// console.log(`y = ${y}`);
// det kommer en feil meling

//Oppgave 4

let z;
{
z = 10;
//utskrift a)
console.log(`z = ${z}`);
}
//utskrift b)
console.log(`z = ${z}`)
// begge to skriver ut at z er 10

//Oppgave 5

let a;
fubar();
console.log(`a = ${a}`);
function fubar(){
a =2;
}
// den skriver ut a = 2 vet ikke helt hvordan jeg forklarer det

//Oppgave 6

let b = 10;
add(b, 5);
console.log(b);
function add(c, d){
let result = c + d;
console.log(result);
}
// den gir 2 utskrifter 10 og 15 som tekst ikke tall 

// Oppg 1 
// Hensikten med en funksjon er å samle kode som utfører en bestemt oppgave på ett sted. Da kan man bruke den flere ganger uten å skrive samme kode om igjen, noe som gjør programmet mer ryddig og effektivt.

// Oppg 2 a
function hello () {
    console.log ("hello world")
}

// b
// Et funksjonskall er når du "hello()" funksjonen ved å skrive navnet på den etterfulgt av parenteser. Det gjør at koden inni funksjonen blir utført.

// c 
// hello()

// Oppg 3
// En parameter er en variabel som funksjonen kan ta imot når den blir definert.
// Et argument er verdien du faktisk sender inn når du kaller funksjonen.
// Parameter = navn i funksjonen
// Argument = verdi du gir når du kaller funksjonen

// Oppg 4
function printparameter (tekst) {
    console.log (tekst)
}
printparameter ("hei jeg heter mikael")
printparameter ("jeg er 16 år")

// Oppg 5
function printparameter (par1, par2) {
    console.log (par1 , par2)
}

printparameter ("jeg har en hund", "og en katt")

// Oppg 1

// return avslutter en funksjon og sender et resultat tilbake til stedet der funksjonen ble kalt. Alt som står etter return inni funksjonen blir ikke kjørt. 
// let aa = 20;
// let bb = 10;
// function add () {
//     let aa = 10;
//     let bb = 5;
//     let banan = "Banan"
//     console.log(banan, "dette er inni funksjonen")
//     return aa + bb
//     console.log ("denne linjen blir ikke kjørt")
// }

// const result = add ()
// console.log (result, "lokalt scope")
// console.log(aa+bb, "global scope");
// console.log(banan); //banan is not defined

// Jeg fikk hjelp av monika til å forklare

// Oppgave 2a
// function helloWorld() {
//   return "Hello World";
// }

// console.log(helloWorld());

// Oppgave 2b
function returnerParameter(verdi) {
  return verdi;
}

console.log(returnerParameter("Test"));

// Oppgave 3a
function adder(tall1, tall2) {
  return tall1 + tall2;
}

console.log(adder(3, 4));

// Oppgave 3b
function multipliser(tall1, tall2) {
  const resultat = tall1 * tall2;
  console.log(resultat);
  return resultat;
}

multipliser(5, 6);

// Oppgave 4a
function subtraher(a, b, c) {
  return a - b - c;
}

console.log(subtraher(10, 3, 2));


// Oppgave 4b
function subtraherMedLogg(a, b, c) {
  console.log("a:", a, "b:", b, "c:", c);
  return a - b - c;
}

console.log(subtraherMedLogg(10, 3, 2));


// Oppgave 5
function ferdig() {
  let resultat = "Jeg har klart oppgaven veldig bra!";
  return resultat;
}

console.log(ferdig());

// oppgave 1
const helloWorld = () => {
  console.log("Hello World");
};

helloWorld();

// oppgave 2
const skrivUt = melding => {
  console.log(melding);
};

skrivUt("Hei fra pilfunksjon!");

// oppgave 3
const skrivTreVerdier = (a, b, c) => {
  console.log(a, b, c);
};

skrivTreVerdier(1, "to", true);

// oppgave 4
const skrivAlt = (...verdier) => {
  console.log(verdier);
};

skrivAlt(1, 2, 3, 4, 5);

// oppgave 5
//Pilfunksjoner gir kortere og mer lesbar kode
//Passer veldig godt til callbacks, map, filter, forEach

function vanligFunksjon() {
  console.log(this);
}

const pilFunksjon = () => {
  console.log(this);
};
