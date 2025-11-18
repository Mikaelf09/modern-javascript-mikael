// Oppgavesett 3 a
//Oppg 1
// Mikael Feldt - Oppgavesett 3a Operators
console.log("Mikael Feldt - Oppgavesett 3a Operators");


// Oppg 2. 4)
let x = 10;

// Oppg 3.
let a;
let b;
a = 5;
b = 3;
console.log (a+b)

// Oppg 4

let c;
let d;
c = 10;
d = 4;
console.log (c-d)
// Før så deklarerer jeg c og d så initialiser jeg c og d (gir dem en verdi) og så skriver den ut hva c-d er 

// Oppg 5

let e;
let f;
e = 20;
f = 5;
console.log (e/f)
// "/" brukes til å dele

// Oppg 6

let g;
let h;
e = 6;
f = 7;
console.log (g*h)
// den vil da skrive NaN for de det ikke er et nummer

// Oppg 7

let resultat
resultat = (5+3) * 2
console.log (resultat)
// Jeg har gitt resultat verdien (5+3)*2 så da skriver den ut 16

// Oppgavesett 3 b
// Oppg 1

let score;
score = 10;
score = 20;
console.log(score)

// Oppg 2

let points;
points = 10;
points += 5;
console.log (points)

// Oppg 3

let lives;
lives = 3;
lives -=1;
console.log (lives)
// "-=" treker fra

// Oppg 4

let multiplier = 4;
multiplier *= 2; 
console.log(multiplier);
// "*="det ganger

// Oppg 5

let speed
speed = 180
speed /= 2
console.log (speed)
// "/=" gjør at man deler

// Oppg 6

let number;
number = 10; // nå er number 10
number += 5; // her pluser den på 5
number *= 2; // her ganger den med 2
number -= 4; // er treker den bort 4
number /= 2; // så deler den på 2
console.log (number)

// Oppg 7

let tall;
tall = (1593 + 2386)* 3 / 4;
console.log (tall)
// jeg ga tall verdien (1593 + 2386)* 3 / 4; som blir 2984,25

// Oppgavesett 3 c
// Oppg 2

console.log(5 + 5);
console.log(10 + 20);
// da skriver den ut 10 og 30

// Oppg 3

console.log("5" + "5");
console.log("Hei " + "verden");
// da skriver den ut 55 som en string og hei verden

// Oppg 4
console.log("5" + 5);
console.log(5 + "5");
console.log("Tall: " + 5 + 5);
console.log("Sum: " + (5 + 5));
// alt blir tekst selv om bare en av 5 tallene er dekket med "" (hermetegn) og sum, tall vlirogså tekst

// Oppg 5

console.log("10" - "5");
console.log("10" * "2");
console.log("10" / "2");
console.log("10" - 3);
console.log("10" * 3);
console.log("10" / 3);
// man får tall tilbake

// Oppg 6
{    
    console.log("Hei" - "der");
    console.log("Hei" * 3);
    console.log("Hei" / 2);
    // det kommer NaN 3 ganger og det betyr not a number
}

// Oppg 7
{    
    let a = 10;
    a += 5;
    console.log(a);
    
    let b = "Hei";
    b += " verden";
    console.log(b);
    // den legger sammen Hei og verden og 10 + 5 så den gjør det samme på begge to bare legger de sammen
}

// Oppg 8 
{
    let x;
    x = 5 + "3";
    console.log(x);
    // det lusser sammen 53 men det blir ikke 8 det blir 53 fordi det blir gjort om til tekst fordi jeg satte 3 i hermetegn
}