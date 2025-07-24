import createItem from "./services/item.js";
import * as cartService from './services/cart.js';

const myCart = [];
const myWhishlist = [];

console.log('Welcome to the your Shopee cart');

const item1 = createItem('hotwheels ferrari', 20.99, 7);
const item2 = createItem('hotwheels lamborghini', 39.99, 3);

cartService.addItem(myCart, item1);
cartService.addItem(myWhishlist, item2);

console.log("Shopee cart total is: ");
cartService.calculateTotal(myCart);