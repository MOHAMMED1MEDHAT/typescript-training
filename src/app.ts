import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';

//we use as to apply a certain interface to the type;
const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);

  const doc = new (type.value === 'invoice' ? Invoice : Payment)(
    toFrom.value,
    details.value,
    amount.valueAsNumber
  );

  console.log(doc.format());
});
