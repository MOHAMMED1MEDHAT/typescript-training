import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
//we use as to apply a certain interface to the type;
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
    const doc = new (type.value === 'invoice' ? Invoice : Payment)(toFrom.value, details.value, amount.valueAsNumber);
    console.log(doc.format());
});
