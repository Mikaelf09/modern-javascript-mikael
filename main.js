// Oppgavesett 4 a,b,
// Oppg 1 
console.log(1 === 1) // true 
console.log(1 === 2) // false
console.log(3==3) // true
console.log(2==3) // false
//en skriver ut true eller false

//Oppg 2

console.log(1 == `2`) // false
console.log(2 === `2`) // false 
// 2 = tegn sjekker bare verdien og 3 sjekker verdi og data type

//Oppg 3

console.log(1==1 && 2==2) // true 
console.log(1===`1` && 2===2) // false
console.log(1===1 && `2` ===2) // false
console.log(1==`1`&&2==`2`) // true

// Oppg 4

console.log(1===`1` || 2===2) // true 
console.log(2==`2` || 1===`1`) // true 
console.log(2===2 || 1===1 || 3===`3`) // true 

//Oppg 5

console.log(1 !== 1) // false
console.log(2 !== 1) // true 
console.log(2 !== 1 && 1 === 1) // true
console.log(2 !== `2` && 1=== `1` || 2==`2` ) // true

//Oppg 1

console.log(5 > 3) // true
console.log(5 < 3) // false 
console.log(10 > 10) // false
console.log(10 >= 10) // true 
console.log(8 <= 12) // true

//Oppg 2

console.log(4 >= 5) // false
console.log(7 <= 7) // true 
console.log(9 <= 4) // false
console.log(6 > 2) // true
//krokodille tegnene >< peker fereksempel på det som er sørst eller minst og = betyr at det er likt

//Oppg 3

console.log(5 == 5) // true 
console.log(5 == '5') // true
console.log(5 === '5') // false
console.log(5 != 4) // true
console.log(5 !== '5') // true
// == det sjekker bare verdien og === sjekker både datatype og verdi

//Oppg 4

console.log(5 > 3 && 10 > 5) // true 
console.log(5 > 3 && 10 < 5) // false 
console.log(7 >= 7 && 2 < 5) // true 
console.log(4 < 2 && 3 > 1) // false
// for at && skal bli true så må det være riktig på begge sider

//Oppg 5

console.log(5 > 3 || 10 > 5) // true
console.log(5 > 3 || 10 < 5) // true
console.log(7 < 7 || 2 < 1) // false
console.log(4 < 2 || 3 > 1) // true
// for at || skal være true så må den bare være riktig på en av sidene

// Oppg 6

console.log(5 > 3 && 10 > 5 || 2 === 2) // true 
console.log(4 < 2 && 3 > 1 || 10 === 10) // true 
console.log(5 === 5 && 3 > 10 || 8 < 12) // true 
// først må du løse && vis begge er riktig da er den true eller så er den false så må du regne || og det betyr at bare en av sidene trenger å værre riktig for at den skal bli true 