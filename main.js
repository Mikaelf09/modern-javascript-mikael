//Oppgavesett 7 A og B
//A)
// Oppgave 1
//A) En array brukes til å lagre flere verdier i én variabel, i en bestemt rekkefølge. Hver verdi får en plass, slik at vi enkelt kan hente ut, endre eller fjerne data.
//B) Dynamiske kan endre størrelse underveis. Kan inneholde forskjellige datatyper samtidig tall, tekst, objekter osv.

// Oppgave 2
//A) 
let ender = [];
//B) 
ender[0] = "Donald Duck";
ender[1] = "Ole";
ender[2] = "Dole";
ender[3] = "Doffen";
ender[4] = "Skrue McDuck";
ender[5] = "Petter Smart";
ender[6] = "B-gjengen";
ender[7] = "Langbein";
ender[8] = "Dolly Duck";
ender[9] = "Fettern Anton";
//C)
console.log(ender[2]);
console.log(ender[5]);
console.log(ender[8]);

//Oppgave 3
//A)
//En index er posisjonen til et element i en array.
//B)
//Første index er 0.
//C)
// array.length - 1 
//D)
//array.length forteller hvor mange elementer arrayen inneholder.
//E)
//Hvis en array har lengde 10, er siste index 9.Lengden er alltid én mer enn høyeste index.

// Oppgave 4
//A)
// typeof retunerer object når den er brukt i en array.
//B)
// Array.isArray(verdi);
//C)
function sjekkArray(parameter) {
  if (Array.isArray(parameter)) {
    console.log("Argumentet er en array");
  } else {
    console.log("Argumentet er ikke en array");
  }
}

sjekkArray([1, 2, 3]);
sjekkArray("hei");

//B)
// Oppgave 1
let arr1 = [10, 20, 30];
console.log(arr1[1]);

// Oppgave 2
let arr2 = [];
arr2[0] = "hello";
arr2[1] = "world";
console.log(arr2);

// Oppgave 3
let arr3 = [1, 2, 3, 4, 5];
console.log(arr3.length);

// Oppgave 4
let arr4 = ["eple", "banan", "jordbær"];
arr4[1] = "blåbær";
console.log(arr4);

// Oppgave 5
let arr5 = [5, 10, 15];
arr5[3] = 20;
console.log(arr5);

// Oppgave 6
let arr6 = ["rød", "grønn", "blå"];
console.log(arr6[arr6.length - 1]);

// Oppgave 7
let arr7 = [7, 14, 21];
console.log(arr7[0] < arr7[2]);

// Oppgave 8
let arr8 = [2, 4, 6, 8];
console.log(arr8[0] + arr8[2]);

// Oppgave 9
let arr9 = [[1, 2, 3], [4, 5, 6]];
console.log(arr9[1][1]);

// Oppgave 10
let x = 100;
let y = 200;
let z = 300;
let arr10 = [x, y, z];
console.log(arr10);



