"use strict";
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    fromat() {
        return `owner: ${this.client} details:${this.details} amount: ${this.amount}`;
    }
}
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
const invOne = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
console.log(invOne.fromat());
