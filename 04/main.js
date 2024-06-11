const resturant = {
  name: "Classico Italiano",
  location: "Via Anglo Tavanti 23, firenze, italy",
  catrgories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  getNum: 0,
  openingHour: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order(startMenuIndex, mainMenuIndex) {
    return [this.starterMenu[startMenuIndex], this.mainMenu[mainMenuIndex]];
  },
  orderDelivery({ startIndex, mainIndex, time }) {
    console.log(
      `the starter menu is ${this.starterMenu[startIndex]} and main food is ${this.mainMenu[mainIndex]} at the ${time}`
    );
  },
};

/*

Desturcting Array

const arr = [1,2,3]
const [x,y,z] = arr
console.log(x,y,z)


let [first, ,second] = resturant.catrgories;
console.log(first, second);

// Switching Variables 
[first, second] = [second, first];
console.log(first, second)

// return 2 values from a function
const [startMenu, mainMenu] = resturant.order(0,2)
console.log(startMenu, mainMenu)
console.log(resturant.order(0,2))

const nestedArr = [2,3,[4,5]]
const [a, , j] = nestedArr
console.log(a,j)

*/
/*
// Desturcting Objects
// const { openingHour, catrgories } = resturant;
// console.log(openingHour,catrgories);

// Change name of objects  
const { name: resturantName } = resturant;
console.log(resturantName)

// Nested Object
const { fri: {open : o, close: c}} = resturant.openingHour;
console.log(o,c)

resturant.orderDelivery({
    startIndex : 0,
    mainIndex: 0,
    time : 13
})

const newRestourant = {found : 1998, ...resturant}
console.log(newRestourant)
*/

// console.log(0 || 1);
// console.log("hatef" && "salam" && false);

// const number = resturant.getNum ?? 20;

// console.log(number)

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// for(const [Goal, scored] of game.scored.entries()){
//   console.log(`${Goal+ 1} : ${scored}` )
// }
// const y = Object.values(game.odds)
// console.log(y)
// let sum = 0
// for (const item of y) {
//   sum+= item;
  
// } 
// console.log(Math.trunc((sum /  y.length)))


/*
const [players1, players2] = game.players
console.log(players1, players2)

const [gkBayern, ...filedPlayersBayern] = players1
const [gkBorrussia, ...filedPlayersBorrussia] = players2

const allPlayer = [...players1, ...players2]
console.log(allPlayer)

const players1Final = [...players1, 'Tiago', 'Coutinho', 'Perisic']

const {team1, x: draw, team2} = game.odds
console.log(team1, draw, team2)

const printGoal = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`)
}

printGoal(...game.scored)
*/

// const menu = [...resturant.mainMenu, ...resturant.starterMenu];
// console.log(menu);

// for (const item of menu) console.log(item);

// console.log(resturant.openingHour?.fri);

// // const pro = Object.keys(resturant.openingHour)
// // console.log(pro)

// const entries = Object.entries(resturant.openingHour);

// for (const [key, { open, close }] of entries) {
//   console.log(`on ${key} we open at ${open} and close at ${close}`)
// }

const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza'])
console.log(orderSet)
const orderSets = new Set()
orderSets.add('Hatef').add('Sina').add('Malihe').add('Siyavash')
orderSets.delete('Hatef')
console.log( orderSets)
console.log(orderSets.size) 

const orderMap = new Map()
orderMap.set('hatef', 21)
console.log(orderMap)

