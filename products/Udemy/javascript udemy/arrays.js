var guestList = ["angela", "mithun", "rama", "jogi", "bapi", "manua", "santa"];
var guestName = prompt("enter your name");

if (guestList.includes(guestName)) {
    console.log("welcome");
} else {
    console.log("may be next time");
}


const myArr = [0, 1, 2, 3, 4, 5];

myArr.push(7);
myArr.pop();
//myArr.unshift(6);
myArr.shift(7);
console.log(myArr);
console.log(myArr.includes(9));

const newArr = myArr.join();
console.log(newArr);
console.log(typeof newArr);

// slice, splice
console.log("A ", myArr);

const myn1 = myArr.slice(1, 4);
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 4);
console.log(myn2);
console.log("C ", myArr);

const heroes = ["ironman", "thor", "hulk", "spiderman", "antman"];
const dcHeroes = ["superman", "flash", "batman"];

heroes.push(dcHeroes);
console.log(heroes);
console.log(heroes[5][1]);

const allHeroes = heroes.concat(dcHeroes);
console.log(allHeroes);

const allNewHeroes = [...heroes, ...dcHeroes];
console.log(allNewHeroes);


const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const realAnotherArr = anotherArr.flat(Infinity);
console.log(realAnotherArr);


console.log(Array.isArray("mithun"));
console.log(Array.from("mithun"));
console.log(Array.from({name: "mithun"})); //important

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));





