// Oppgavesett-8 A og B
//A)
// Oppgave 1
// for løkke 
// Brukes når du vet hvor mange ganger noe skal gjentas.

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while løkke

//Kjører så lenge en betingelse er sann. Brukes når du ikke vet på forhånd hvor mange ganger loopen må kjøres.

let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}

//do while løkke

//Ligner på while, men kjører alltid minst én gang, selv om betingelsen er usann.

let u = 0;

do {
  console.log(u);
  i++;
} while (i < 5);


// break
//Brukes for å avbryte en løkke før den egentlig er ferdig.

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// continue
//Brukes for å hoppe over én runde i loopen, men fortsette videre.

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}

// Oppgave 2

const navneliste = [
  'Geir', 'Mikael', 'Sander', 'Erik', 'Joakim',
  'Mark', 'Jonatan', 'Oleksander', 'Artem', 'Elias', 'Maksym'
];

for (let i = 0; i < navneliste.length; i++) {
  console.log(navneliste[i] + ' har ' + navneliste[i].length + ' bokstaver');
}

// Oppgave 3

const Navneliste = [
  'Geir', 'Mikael', 'Sander', 'Erik', 'Joakim',
  'Mark', 'Jonatan', 'Oleksander', 'Artem', 'Elias', 'Maksym'
];

let reversedList = [];

for (let i = Navneliste.length - 1; i >= 0; i--) {
  reversedList.push(Navneliste[i]);
}

// Oppgave 4

function reduceToOddNumber(number) {

  if (typeof number === 'number') {

    do {
      number = number / 2;
    } while (number % 2 === 0);

    return number;
  }
}

//B)
// Oppgave 1
let navn = ["Odin", "Thor", "Loki", "Freya", "Baldur", "Frigg", "Tyr", "Heimdall", "Hel", "Idunn", "Njord", "Skadi", "Fenrir", "Jormungandr", "Sleipnir"];

for (let i = 0; i < navn.length; ++i) {
    console.log(navn[i]);
}

// Oppgave 2
let tall = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
let sum = 0;

for (let i = 0; i < tall.length; ++i) {
    sum += tall[i];
}

console.log("Summen av tallene er:", sum);

// Oppgave 3
//a)

let Navn = [
    "Anne", "Jan", "Per", "Bjørn", "Ole", "Lars", "Inger", "Kjell", "Kari", "Thomas", 
    "Ingrid", "Svein", "Marit", "Knut", "Tor", "Liv", "Geir", "Martin", "Hans", "Morten",
    "Andreas", "Erik", "Ida", "Arne", "Maria", "Anna", "Terje", "Ann", "Eva", "Daniel", 
    "Anders", "John", "Rune", "Odd", "Hilde", "Nina", "Marianne", "Magnus", "Kristin",
    "Eli","Ola", "Siri", "Einar", "Gunnar", "Randi", "Bente", "Johan", "Mona", "Trond", 
    "Hege","Espen", "Siv", "Steinar", "Elin", "Kjetil", "Linda", "Harald", "Grete", "Leif", 
    "Anita", "Roar", "Tone", "Jon", "Camilla", "Stig", "Lene", "Arild", "Gry", "Frode", 
    "Ragnhild", "Pål", "Britt", "Øyvind", "Laila", "Vidar", "Ellen", "Dag", "Sissel", "Knut", 
    "Anne", "Per", "Inger", "Bjørn", "Kari", "Ole", "Lars", "Jan", "Marit", "Thomas", 
    "Ingrid", "Mohammed", "Ali", "Ahmed", "Aisha", "Fatima", "Hassan", "Sara", "Yousef", "Amira", "Omar"
];

function tellNavn(navnSomSøkes, array) {
    let antall = 0;
    for (let i = 0; i < array.length; ++i) {
        if (array[i] === navnSomSøkes) {
            antall++;
        }
    }
    console.log(`${navnSomSøkes} er oppført ${antall} ganger i arrayen som er ${array.length} lang`);
}

tellNavn("Arne", Navn);

// b)
function tellAlleNavn(array) {
    let unikeNavn = [];

    // Lag liste med unike navn
    for (let i = 0; i < array.length; ++i) {
        let funnet = false;
        for (let j = 0; j < unikeNavn.length; ++j) {
            if (array[i] === unikeNavn[j]) {
                funnet = true;
                break;
            }
        }
        if (!funnet) {
            unikeNavn.push(array[i]);
        }
    }

    // Tell hver forekomst av unike navn
    for (let i = 0; i < unikeNavn.length; ++i) {
        tellNavn(unikeNavn[i], array);
    }
}

tellAlleNavn(Navn);