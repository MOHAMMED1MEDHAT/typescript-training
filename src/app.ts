import { Invoice } from './classes/invoice';

//we use as to apply a certain interface to the type;
const newItemFrom = document.querySelector('.new-item-from') as HTMLFormElement;

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

newItemFrom.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});

const invOne = new Invoice(toFrom.value, details.value, amount.valueAsNumber);

console.log(invOne.format());
