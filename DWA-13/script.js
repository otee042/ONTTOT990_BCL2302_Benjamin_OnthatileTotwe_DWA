const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

//for names only
names.forEach(name => {
  console.log(name);
});

//for names and matching provinces
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

//for using map
const BigProvinces = provinces.map(province => province.toUpperCase());

console.log(BigProvinces);

//new array
// const nameLengths = provinces.map(province => province.length);
// console.log(nameLengths);

// const sortedProvinces = provinces.sort();
// console.log(sortedProvinces);

//Using toSorted method
const sortProvinces = provinces.sort();
console.log(sortProvinces);

//Using Filter method
const filterProvinces = provinces.filter(province => !province.includes('Cape'));
const remainingCount = filterProvinces.length;

console.log(remainingCount);

//for names containing S character
const containsS = names.map(name => name.includes('S'));
console.log(containsS);

const containsSUsingSome = names.map(name => name.split('').some(char => char === 'S'));
console.log(containsSUsingSome);

//for object
const nameProvinceObj = names.reduce((obj, name, index) => {
  obj[name] = provinces[index];
  return obj;
}, {});

console.log(nameProvinceObj);


