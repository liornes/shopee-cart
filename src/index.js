import createItem from "./services/item.js";

const cart = [];

console.log('Welcome to the your Shopee cart');

const item1 = createItem('hotwheels ferrari', 20.99, 2);
const item2 = createItem('hotwheels lamborghini', 39.99, 3);

console.log(item1.subtotal());
console.log(item2.subtotal());