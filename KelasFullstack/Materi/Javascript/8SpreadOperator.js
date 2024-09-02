const arrayAngka = [1, 2, 3, 4, 5, 6, 7, 8];
const arrayNama = ["fahmi", "hidayat", "leo", "chsris", "khabib"];

const mix = [...arrayAngka, ...arrayNama];
console.log(mix);

const dataFahmi = {
  nama: "Fahmi Hidayat",
  usia: 25,
  asal: "Bangka Belitung",
};

const updateData = { ...dataFahmi, alamat: "Batam" };
console.log(updateData);

// ====================== reat param
const addition = (...data) => {
  return data.reduce((total, element) => total + element);
};

console.log(addition(1, 2, 3, 4, 5, 6));

// ============= destructuring
const winner = ["fahmi", "hidayat", "leo", "thomas", "ali", "chris"];
const [gold, ...lainnya] = winner;
console.log(gold);
console.log(lainnya);

const winnerData = {
  name: "Fahmi Hidayat",
  age: 25,
  country: "Indonesia",
};

const { name: nameDie, phone = "08128739" } = winnerData;
console.log(nameDie);
console.log(phone);

const userData = ({ name }) => {
  console.log(name);
};

const userData2 = ([data, xx]) => {
  console.log(data, xx);
};

userData(winnerData);
userData2(winner);
