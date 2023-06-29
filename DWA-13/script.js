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
const uppercaseProvinces = provinces.map(province => province.toUpperCase());

console.log(uppercaseProvinces);

