const resturant = {
  name: "Classico Italiano",
  location: "Via Anglo Tavanti 23, firenze, italy",
  catrgories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHour: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sar: {
      open: 0,
      close: 24,
    },
  },
  order: function (startMenuIndex, mainMenuIndex) {
    return [this.starterMenu[startMenuIndex], this.mainMenu[mainMenuIndex]];
  },
  orderDelivery: function ({ startIndex, mainIndex, time }) {
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

console.log(0 || 1);
console.log("hatef" && "salam" && false);


const number = resturant.getNum || 20;

console.log(number)
