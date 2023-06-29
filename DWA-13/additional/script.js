const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

  //using forEach method
  products.forEach((item) => {
    console.log(item.product);
  });

  //Using filter method
  
const filteredProducts = products.filter((item) => {
    return item.product.length <= 5;
  });
  
  console.log(filteredProducts);

  //Using filter and map
  const filterProducts = products
  .filter((item) => item.price !== '' && !isNaN(Number(item.price)))
  .map((item) => ({
    ...item,
    price: Number(item.price),
  }));

const combinedPrice = filterProducts.reduce((accumulator, item) => {
  return accumulator + item.price;
}, 0);

console.log(filterProducts);
console.log('Combined Price:', combinedPrice);

//To concatenate
const productNames = products.reduce((accumulator, item, index) => {
    if (item.product) {
      if (index === 0) {
        return item.product;
      } else if (index === products.length - 1) {
        return accumulator + ' and ' + item.product;
      } else {
        return accumulator + ', ' + item.product;
      }
    }
    return accumulator;
  }, '');
  
  console.log(productNames);

  //Calculating highest and lowest priced items
  const { highest, lowest } = products.reduce((accumulator, item) => {
    const price = Number(item.price);
    if (!isNaN(price)) {
      if (price > accumulator.highest.price) {
        accumulator.highest = { name: item.product, price };
      }
      if (price < accumulator.lowest.price || !accumulator.lowest.price) {
        accumulator.lowest = { name: item.product, price };
      }
    }
    return accumulator;
  }, { highest: { name: '', price: 0 }, lowest: { name: '', price: 0 } });
  
  const highestFormatted = `Highest: ${highest.name}`;
  const lowestFormatted = `Lowest: ${lowest.name}`;
  
  console.log(highestFormatted);
  console.log(lowestFormatted);

  //Recreating new products
  const newProducts = products.reduce((accumulator, item) => {
    const newItem = Object.entries(item).reduce((obj, [key, value]) => {
      if (key === 'product') {
        obj.name = value;
      } else if (key === 'price') {
        obj.cost = value;
      } else {
        obj[key] = value;
      }
      return obj;
    }, {});
    accumulator.push(newItem);
    return accumulator;
  }, []);
  
  console.log(newProducts);