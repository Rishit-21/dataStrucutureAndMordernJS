"use strict";

// Data needed for a later exercise
const flights = "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const openingHours = {
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
}

// Data needed for first part of the section
const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

openingHours,


    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery ({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
        console.log(`order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`);
    },

    orderPasta (ing1, ing2, ing3) {
        console.log(`here is your declicious pasta with ${ing1},${ing2},${ing3}`);
    },

    orderPizza(mainIngrident,...otherIngridents){
      console.log(mainIngrident);
      console.log(otherIngridents);
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

const { name, openHours, categories } = restaurant;
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

const rest1 = {
    name: 'Capri',
    // numGuests: 20,
    numGuests: 0,
  };
  
  const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
  };

//OR assignment operator
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;
console.log(rest1);
console.log(rest2);

console.log('------')
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
console.log(rest1);
console.log(rest2);

console.log('--nullish operator')

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1);
console.log(rest2);

console.log('--------');
// AND assignment operator
rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner = rest2.owner && '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

console.log('--------')

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);


///////////////////////////////////////
// The Nullish Coalescing Operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

///////////////////////////////////////
// Short Circuiting (&& and ||)

console.log('---- OR ----');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

const menu3 = [...restaurant.starterMenu,...restaurant.mainMenu];

for(const item of menu3) console.log(item);
for(const [i,el] of menu3.entries()) console.log(`${i + 1}: ${el}`);

if(restaurant.openingHours && restaurant.openingHours.mon){
    console.log(restaurant.openingHours.frimon.open);

    
}
console.log(restaurant.openingHours.mon?.open);

const days =['mon','tue','wed','thur','fri','sat','sun'];

for(const day of days){
    const open = restaurant.openingHours[day]?.open ?? 'closed';

    console.log(`on ${day},we are open at ${open}`);
}

console.log(restaurant.order?.(0,1) ?? 'method does not exist');
console.log(restaurant.orderRissoto?.(0,1) ?? 'method does not exist');

const users= [{name:'jonas',email:'hy@rk.io'}];

console.log(users[0]?.name ?? 'user array emopty')

const properties = Object.keys(openingHours);
console.log(properties);

 let openStr = `we are open on ${properties.length} days:`;

for (const day of properties){
    openStr += `${day},`;
}

console.log(openStr);

const values = Object.values(openingHours)
console.log(values);
const entries = Object.entries(openingHours)
console.log(entries);

for (const [key,{open,close}] of entries){
    console.log(`On ${key} we open at ${open} and close at ${close}`)
}

const orderSet = new Set(['Pasta','Pizza','Rossitto','Pasta','Pizza',]);

console.log(orderSet);

console.log(new Set('Rishit'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
orderSet.add('GarlicBread');
orderSet.add('GarlicBread');

orderSet.delete('Rossitto')
console.log(orderSet);

for(const order of orderSet){
    console.log(order);
}

const staff = ['Waiter','Chef','Manager','Chef','Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

const rest = new Map;
rest.set('name','Classico Italiano');
rest.set(1,'Frienze,Italy');
console.log(rest.set(2,'Lisbon,portugal'));

rest.set('categoies',["Italian", "Pizzeria", "Vegetarian", "Organic"])
.set('open',11)
.set('close',23)
.set(true,'we are open')
.set(false,'We are closed');
console.log(rest)

console.log(rest.get('name'))
console.log(rest.get(true))
 

const time = 24;
console.log(rest.get(time>rest.get('open') && time<rest.get('close')))

console.log(rest.has('categories'));
rest.delete(2) 
rest.set(document.querySelector('h1'),'heading')
const arr = [1,2];
rest.set(arr,'test');
console.log(rest.size);

console.log(rest.get(arr));

const question =new Map([
    ['question','What is the best programing language in the world '],
    [1,'c'],
    [2,'java'],
    [3,'javaScript'],
    ['correct',3],
    [true,'Correct'],
    [false,'Try Again'],
])

console.log(question.get('question'));
for(const [key,value] of question){
    if(typeof key ==='number'){
        console.log(`Answer ${key}: ${value}`);
    }
}
// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct')===answer));

// if(answer === (question.get('correct'))){
//     console.log(question.get(true));
// }
// else{
//     console.log(question.get(false));
// }

console.log([...question]);
console.log(...question.keys());
console.log([...question.values()]);









