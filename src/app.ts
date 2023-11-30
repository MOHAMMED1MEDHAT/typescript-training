import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListElement } from './classes/ListElements.js';
//we use as to apply a certain interface to the type;
const newItemForm = document.querySelector('.new-item-form') as HTMLFormElement;

const itemList = document.querySelector('.item-list') as HTMLUListElement;

const listElement = new ListElement(itemList);
//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

newItemForm.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);

  const doc = new (type.value === 'invoice' ? Invoice : Payment)(
    toFrom.value,
    details.value,
    amount.valueAsNumber
  );

  // console.log(doc.format());

  listElement.render(doc, 'rendering', 'end');
});

//GENERICS
const addUid = <T extends object>(obj: T): object => {
  let uid = Math.floor(Math.random() * 100);

  return { ...obj, uid };
};

console.log(addUid({ name: 'mohamed', age: 21 }));

enum ResourceType {
  AUTHOR,
  FILM,
  DIRECTOR,
}

enum ResourceType {
  PERSON = 3,
  BOOK,
}

interface IRescourse<T> {
  name: string;
  age: number;
  resourceType: ResourceType;
  data: T;
}

const docOne: IRescourse<string> = {
  name: 'mohamed',
  age: 21,
  resourceType: ResourceType.AUTHOR,
  data: 'hello',
};

const docTwo: IRescourse<string[]> = {
  name: 'mohamed',
  age: 21,
  resourceType: ResourceType.AUTHOR,
  data: ['hello', 'world'],
};

let tub: [string, boolean, number] = ['mohamed', true, 21];
