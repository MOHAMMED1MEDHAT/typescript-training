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
//GENERICS
const addUid = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
console.log(addUid({ name: 'mohamed', age: 21 }));
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["AUTHOR"] = 0] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 1] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 2] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 3] = "PERSON";
    ResourceType[ResourceType["BOOK"] = 4] = "BOOK";
})(ResourceType || (ResourceType = {}));
const docOne = {
    name: 'mohamed',
    age: 21,
    resourceType: ResourceType.AUTHOR,
    data: 'hello',
};
const docTwo = {
    name: 'mohamed',
    age: 21,
    resourceType: ResourceType.AUTHOR,
    data: ['hello', 'world'],
};
let tub = ['mohamed', true, 21];
