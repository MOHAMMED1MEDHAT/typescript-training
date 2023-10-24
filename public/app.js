import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListElement } from './classes/ListElements.js';
//we use as to apply a certain interface to the type;
const newItemForm = document.querySelector('.new-item-form');
const itemList = document.querySelector('.item-list');
const listElement = new ListElement(itemList);
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
newItemForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
    const doc = new (type.value === 'invoice' ? Invoice : Payment)(toFrom.value, details.value, amount.valueAsNumber);
    console.log(doc.format());
    listElement.render(doc, 'hi form the render method', 'end');
});
