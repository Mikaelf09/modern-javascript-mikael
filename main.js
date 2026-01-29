// Oppgavesett-9
// Oppgave 1
const elev1 = {
  fornavn: "Mikael",
  etternavn: "Feldt",
  alder: 16
};

const elev2 = {
  fornavn: "Joakim",
  etternavn: "Sørbo",
  alder: 18
};

const elev3 = {
  fornavn: "Sander",
  etternavn: "Tennstrand",
  alder: 16
};

const elev4 = {
  fornavn: "jonatan",
  etternavn: "Brekke",
  alder: 17
};

// Oppgave 2
function printElev(elev) {
  console.log(
    `Navn: ${elev.fornavn} Etternavn: ${elev.etternavn} Alder: ${elev.alder}`
  );
}

printElev(elev1);

// Oppgave 3
function carFactory(antallSeter, hestekrefter, modell, type) {
  return {
    antallSeter,
    hestekrefter,
    modell,
    type
  };
}

const biler = [
  carFactory(5, 150, "Focus", "sedan"),
  carFactory(7, 200, "Explorer", "SUV"),
  carFactory(5, 180, "Passat", "stasjonsvogn"),
  carFactory(2, 300, "Mustang", "coupe")
];

console.log(biler);

// Oppgave 4
function carFactory(antallSeter, hestekrefter, modell, type) {
  return {
    antallSeter,
    hestekrefter,
    modell,
    type,
    serienummer: null,
    genererSerienummer() {
      this.serienummer = Math.floor(Math.random() * 1_000_000);
    }
  };
}

const bil1 = carFactory(5, 150, "Focus", "sedan");
bil1.genererSerienummer();

console.log(bil1);

// Oppgave 5
function merkeFactory(merke) {
  return function (antallSeter, hestekrefter, modell, type) {
    return {
      merke,
      antallSeter,
      hestekrefter,
      modell,
      type,
      serienummer: null,
      genererSerienummer() {
        this.serienummer = Math.floor(Math.random() * 1_000_000);
      }
    };
  };
}

const fordFactory = merkeFactory("koenigsegg");

const ford1 = fordFactory(2, 1600, "Regera", "sportsbil");
const ford2 = fordFactory(2, 1600, "Jesko", "sportsbil");

ford1.genererSerienummer();
ford2.genererSerienummer();

console.log(ford1);
console.log(ford2);