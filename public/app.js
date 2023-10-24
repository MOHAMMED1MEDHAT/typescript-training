"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const invoice_1 = require("./classes/invoice");
//we use as to apply a certain interface to the type;
const newItemFrom = document.querySelector('.new-item-from');
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
newItemFrom.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
const invOne = new invoice_1.Invoice(toFrom.value, details.value, amount.valueAsNumber);
console.log(invOne.format());
