const products = [
    { id: 1, name: 'Crystal' },
    { id: 4, name: 'Namthip' },
    { id: 5, name: 'Nestle' }
  ];

const toNewProductForm = (obj, cur) => {
    obj[cur.id] = cur.name;
    return obj;
}


const newProducts = products.reduce(toNewProductForm, {})
console.log(newProducts);
// { 1: { name: 'Crystal' }, 4: { name: 'Namthip' }, 5: { name: 'Nestle' } };

