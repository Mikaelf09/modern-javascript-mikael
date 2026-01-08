//Oppgavesett-6 a, b, c og d

//Oppgave 1
function sjekkString(verdi) {
  if (typeof verdi === "string") {
    console.log("STRING STRING STRING!");
  } else {
    console.log("Dette er ikke en String i det hele tatt");
  }
}

sjekkString(1);        // a)
sjekkString("1");      // b)
sjekkString("Navn");   // c)

//Oppgave 2
function sjekkSammeType(a, b) {
  if (typeof a === typeof b) {
    console.log("Variablene du brukte er av samme type!");
  } else {
    console.log("Variablene du brukte er IKKE av samme type!");
  }
}

sjekkSammeType("en", 1);   // a)
sjekkSammeType(1, 1);      // b)
sjekkSammeType(2, 3);      // c)
sjekkSammeType("2", "3");  // d)
sjekkSammeType(2, "3");    // e)

//Oppgave 3
// A)
let verdi = 10;

if (typeof verdi === "number") {
  console.log("Dette er et tall!");
} else {
  console.log("Test failed");
}
// B)

let a = 3;
let b = 7;

if (typeof a !== "number" || typeof b !== "number") {
  if (typeof a !== "number") {
    console.log("Variabelene er ikke av typen number, den er av typen:", typeof a);
  }
  if (typeof b !== "number") {
    console.log("Variabelene er ikke av typen number, den er av typen:", typeof b);
  }
} else {
  if (a > 5) {
    console.log("Jeg fant en variabel som var større enn fem! Den hadde verdien:", a);
  } else if (b > 5) {
    console.log("Jeg fant en variabel som var større enn fem! Den hadde verdien:", b);
  }
}


//Oppgave 1
function summer(a, b) {
  return a + b;
}

let resultat = summer(2, 3);

//Oppgave 2
function addNumbers(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return "Error: Begge parametere må være tall";
  }
}

console.log(addNumbers(3, 4));  
console.log(addNumbers(3, "4")); 

//Oppgave 3
function logText(param1, param2) {
  if (typeof param1 === "string" && typeof param2 === "string") {
    console.log(param1 + " og " + param2);
  } else {
    console.error("Error: Jeg skriver bare ut tekst!");
  }
}

logText("Hei", "Verden");
logText("Hei", 5);

//Oppgave 4

function calculate(a, b, operator) {

  // Sjekk tall
  if (typeof a !== "number" && typeof b !== "number") {
    console.error(a + " og " + b + " er ikke tall! Programmet terminerer!");
    return;
  }

  if (typeof a !== "number") {
    console.error(a + " er ikke et tall! Kan ikke utføre " + operator + ". Programmet terminerer!");
    return;
  }

  if (typeof b !== "number") {
    console.error(b + " er ikke et tall! Kan ikke utføre " + operator + ". Programmet terminerer!");
    return;
  }


  if (!["+", "-", "*", "/"].includes(operator)) {
    console.error(operator + " er ikke en gyldig operasjon. Programmet terminerer!");
    return;
  }

  
  let resultat;

  switch (operator) {
    case "+":
      resultat = a + b;
      break;
    case "-":
      resultat = a - b;
      break;
    case "*":
      resultat = a * b;
      break;
    case "/":
      resultat = a / b;
      break;
  }

  console.log(a + " " + operator + " " + b + " = " + resultat);
}


calculate(10, 5, "+"); 
calculate(10, "5", "*");
calculate(10, 5, "%");   

// Oppgave 1: Temperaturkonvertering
function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

// Oppgave 2: Beregne alder
function calculateAge(birthYear, currentYear) {
  return currentYear - birthYear;
}

// Oppgave 3: Enkel kalkulator
function calculate(a, b, operator) {
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else {
    return "Ugyldig operator";
  }
}

// Oppgave 4: Sjekk om tall er partall
function isEven(number) {
  return number % 2 === 0;
}

// Oppgave 5: Finne større tall
function findMax(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return "Tallene er like";
  }
}

// Oppgave 6: Skatteberegning
function calculateTax(income) {
  if (income < 50000) {
    return income * 0.10;
  } else if (income <= 100000) {
    return income * 0.20;
  } else {
    return income * 0.30;
  }
}

// Oppgave 7: Valider e-postadresse
function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}

// Oppgave 8: Finn lengste streng
function findLongestString(str1, str2) {
  if (str1.length > str2.length) {
    return str1;
  } else if (str2.length > str1.length) {
    return str2;
  } else {
    return "Strengene er like lange";
  }
}

// Oppgave 9: Kalkuler rabatt
function calculateDiscount(price, discountPercent) {
  return price - (price * discountPercent / 100);
}

// Oppgave 10: Sjekk passordstyrke
function isStrongPassword(password) {
  return password.length >= 8 && /\d/.test(password);
}

//Oppgave 1
function handleOption(selectedOption) {

  if (typeof selectedOption !== "number") {
    console.log("Error");
    return;
  }

  switch (selectedOption) {
    case 1:
      console.log("Brukeren startet programmet");
      break;
    case 2:
      console.log("Brukeren vil gjøre en utskrift");
      break;
    case 3:
      console.log("Brukeren vil avslutte programmet");
      break;
    default:
      console.log("Valget er ikke et gyldig valg. Velg på nytt.");
  }
}

handleOption(1);
handleOption(4);
handleOption("1");

//Oppgave 2
function calculator(operator, a, b) {
  
  if (
    typeof operator !== "string" ||
    typeof a !== "number" ||
    typeof b !== "number"
  ) {
    console.log("syntax error");
    return;
  }

  switch (operator) {
    case "+":
      console.log(a + b);
      break;
    case "-":
      console.log(a - b);
      break;
    case "*":
      console.log(a * b);
      break;
    case "/":
      console.log(a / b);
      break;
    default:
      console.log("syntax error");
  }
}

calculator("+", 5, 3);
calculator("/", 10, 2);
calculator("x", 4, 5);