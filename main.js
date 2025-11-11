// Oppg 2a

// 1.
{

    console.log ("Å deklarere en variabel betyr å fortelle programmet at en variabel finnes, og gi den et navn, men uten å gi den en verdi enda.");
    let navn = "mikael";
}

// 2.
{
    
    console.log ("Dette betyr at du både oppretter deklarerer variabelen og gir den en verdi samtidig.");
    let alder = 16
}

// 3.
{
    
    console.log ("Å initialisere en variabel betyr å gi den en startverdi");
    alder = 16;
}

// 4.
{
    
    console.log ("let og var brukes begge til å lage variabler var er den gmle måten og let er den nye");
}

// 5.
{
    
    console.log ("En variabel kan endres etter at den er opprettet");
    console.log ("En konstant kan ikke endres etter at den har fått en verdi.");
}

// 6.

console.log ("String, Number, object");

// 7.
// a)
{
let navn = "joakim";  // deklarert, men ikke fått verdi
console.log(navn);  // undefined

    let alder = null;   // bevisst satt til "ingen verdi"
    console.log(alder); //  null
}
// b)

console.log ("Å vite forskjellen hjelper deg å forstå hvorfor en variabel mangler verdi");

// Oppg 2b

// 1.
console.log(typeof 42) // number

console.log(typeof "Hei") // string

console.log(typeof true) //  boolean

console.log(typeof undefined) //  undefined

console.log(typeof null) //  null

console.log(typeof Symbol("id")) //  symbol

console.log(typeof 12345678901234567890n) //  bigint

console.log(typeof {navn: "Ola", alder: 16}) //  object

// 2.

// A) 
console.log ("det er datatype number og det sier bare at i er 42 ")
// B)
console.log ("Nå har i blitt en string ")
// C)
console.log ("Denne data typen er en Boolean")
