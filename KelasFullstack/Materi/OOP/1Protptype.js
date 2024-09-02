const array1 = {
  name: "fahmi",
  greeting: function () {
    console.log(`Halo ${this.name}`);
    return this.name;
  },
};

console.log(array1.greeting());

Array.prototype.bonjour = () => {
  return `bonjour fahmi`;
};

const arrayBaru = [1, 2, 3, 4];
console.log(arrayBaru.bonjour());

Array.prototype.pop = () => {
  return `method di nonaktifkan`;
};

console.log(arrayBaru.pop());
console.log(arrayBaru);
