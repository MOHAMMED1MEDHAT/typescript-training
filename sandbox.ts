const inputs = document.querySelectorAll('input');

console.log(inputs);

inputs.forEach((input) => {
  console.log(input);
});

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(9.5));
