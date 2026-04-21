// Oppgavesett-10
// 1.a
function helloWorld() {
    console.log("Hello World");
}

function imalive() {
    console.log("I’m alive!")
}

function green() {
    console.log("Its not easy being green!")
}

function executor(a, b, c) {
    a();
    b();
    c();
}

executor(helloWorld, imalive, green);

//b

executor(
    () => console.log("Amors piler treffer alltid i hjertet!"),
    () => console.log("Cri’ Cri’ d’amore!"),
    () => console.log("Parles vous francois?")
);

// 2
// a
function greet(name) {
    console.log(`Hello ${name}`);
}

function login(name) {
    console.log(`${name} just logged in`);
}

function logout(name) {
    console.log(`${name} just logged out`);
}

function executorWithArg(name, a, b, c) {
    a(name);
    b(name);
    c(name);
}


executorWithArg("Mikael", greet, login, logout);

// b

executorWithArg(
    "kk",
    () => console.log("Franskmenn liker ikke piler"),
    () => console.log("Piler kan være farlige, eller de kan bare vise vei!"),
    () => console.log("Pilgård er ikke en pil, selv om han piler fra sted til sted!")
);

// oppgave 3

function runRoutines(...routines) {
    let totalDelay = 0;
    let lastTime = Date.now();

    for (let i = 0; i < routines.length; i++) {
        const delayBetweenCalls = Math.floor(Math.random() * 3) * 1000;
        totalDelay += delayBetweenCalls;

        setTimeout(() => {
            const currentTime = Date.now();
            const secondsPassed = ((currentTime - lastTime) / 1000).toFixed(2);

            console.log(`Det har gått ${secondsPassed} sekunder siden forrige funksjonskall`);
            routines[i]();

            lastTime = currentTime;
        }, totalDelay);
    }
}

function routineOne() {
    console.log("Routine 1 kjører");
}

function routineTwo() {
    console.log("Routine 2 kjører");
}

function routineThree() {
    console.log("Routine 3 kjører");
}

const routineList = [routineOne, routineTwo, routineThree];
const testRoutines = [];

for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * routineList.length);
    testRoutines.push(routineList[randomIndex]);
}

runRoutines(...testRoutines);
