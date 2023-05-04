// coffee_data.js = coffeeMenu
const coffeeMenu = require("./coffee_data.js");

//3 Print an array of all the drinks on the menu
const fullMenu = coffeeMenu.map((coffeeMenu) => coffeeMenu.name);
console.log(fullMenu);
//4 Print an array of drinks that cost 5 and under
const underFive = coffeeMenu.filter((coffeeMenu) => coffeeMenu.price <= 5);
console.table(underFive);
//5 Print an array of drinks that are priced at an even number
const evenPrice = coffeeMenu.filter((coffeeMenu) => coffeeMenu.price % 2 === 0);
console.table(evenPrice);
//6 Print the total if you were to order one of every drink
let menuTotal = 0;
for (let i = 0; i < coffeeMenu.length; i++) {
  menuTotal += coffeeMenu[i].price;
}
console.log("All the drinks cost a total of $" + menuTotal);
//7 Print an array with all the drinks that are seasonal
const seasonal = coffeeMenu.filter((coffeeMenu) => coffeeMenu.seasonal);
console.table(seasonal);
//8 Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans"
const seasonalTotal = seasonal.map(
  (coffeeMenu) => coffeeMenu.name + " with imported beans"
);
console.table(seasonalTotal);