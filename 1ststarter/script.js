"use strict";

// Data needed for a later exercise
const flights = "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
        console.log(`order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`);
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`here is your declicious pasta with ${ing1},${ing2},${ing3}`);
    },

    orderPizza: function(mainIngrident,...otherIngridents){
      console.log(mainIngrident);
      console.log(otherIngridents);
    },

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};

restaurant.orderDelivery({
    time: "22:30",
    address: "via del sole,21",
    mainIndex: 2,
    starterIndex: 2,
});

restaurant.orderDelivery({
    address: "via del sole,21",
    starterIndex: 1,
});

// const ingredients = [prompt("lets make pasta! Ingredient 1?"), prompt("lets make pasta! Ingredient 2?"), prompt("lets make pasta! Ingredient 3?")];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);
/////spread  operation
const newRestaurant = {foundedIn: 1998,...restaurant,
founder:'Guiseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name='Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);


//rest operators 

const[a,b,...others]=[1,2,3,4,5];
console.log(a,b,others);

const[pizza, , risotto,...otherFood] = [
  ...restaurant.mainMenu,...restaurant.starterMenu,
];

console.log(pizza,risotto,otherFood)

//objects
const{sat, ...weekdays}=restaurant.openingHours;
console.log(sat,weekdays);

//function

const add = function(...numbers){
  let sum = 0;
  for(let i = 0; i<numbers.length;i++){
    sum+=numbers[i];
    
  }
  console.log(sum);
};

add(2,3);
add(5,3,7,2);
add(8,2,5,3,2,1,4);

const x = [23,5,7]

add(...x);

restaurant.orderPizza('cheese','mushroom','onion','olives','spinach');
/////////////////////////////////////////////////

///////////////
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;

console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
////////
/////
/////

// let a = 111;
// let b = 999;
// const obj = {
//     a: 23,
//     b: 7,
//     c: 14,
// };
// ({ a, b } = obj);
// console.log(a, b);

const {
    fri: { open, close },
} = openingHours;
console.log(open, close);

// const arr = [7, 8, 9];
// const badarr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badarr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Goncci"];
console.log(newMenu);

//copy array

const mainMenuCopy = [...restaurant.mainMenu];

//join 2 array

const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu1);

const str = "jonas";
const letters = [...str, "", "s."];
console.log(letters);
console.log(...str);