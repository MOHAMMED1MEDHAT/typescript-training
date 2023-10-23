type standardUser = { name: string; age: string | number };

const greet = (user: standardUser): void => {
  console.log(`hi ${user.name} age ${user.age}`);
};

const user = {
  name: 'mohammed',
  age: 21,
  race: 'cocasian',
};

greet(user);
