// 1. จำนวน transaction ทั้งหมด
// 2. จำนวนลูกค้าที่แตกต่างกัน มีใครบ้าง แต่ละคนซื้อไปยอดรวมกันเท่าไหร่ กี่เครื่อง
// 3. ยอดขายทั้งหมด (หลังหัก discount)
// 4. สินค้าที่ถูกขายมี่กี่ยี่ห้อ แต่ละยี่ห้อขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่
// 5. สินค้าที่ถูกขายมีกี่รุ่นในแต่ละยี่ห้อ แต่ละรุ่นขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่
// 6. หายอดรวมของการจ่ายแต่ละประเภท (Cash, Credit, ...)
// 7. หายอดรวมในแต่ละวัน
// 8. เรียงยอดขายของแต่ละรุ่นจากมากไปน้อย
// 9. เรียงลูกค้าที่ซื้อมากที่สุดจากมากไปน้อย

const sales = [
  {
    id: 1,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 48900
    },
    saleDate: '01-01-2021',
    customer: 'Sun',
    discount: 0.2,
    type: 'Cash'
  },
  {
    id: 2,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '01-01-2021',
    customer: 'Tle',
    type: 'Credit'
  },
  {
    id: 3,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 36900
    },
    saleDate: '01-01-2021',
    customer: 'Beer',
    type: 'Cash'
  },
  {
    id: 4,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '01-01-2021',
    customer: 'Jit',
    discount: 0.2,
    type: 'Credit'
  },
  {
    id: 5,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 36900
    },
    saleDate: '01-01-2021',
    customer: 'Palm',
    type: 'Cash'
  },
  {
    id: 6,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 48900
    },
    saleDate: '01-01-2021',
    customer: 'Top',
    type: 'Credit'
  },
  {
    id: 7,
    product: {
      id: 4,
      name: 'Oppo',
      model: 'A15',
      unitPrice: 4299
    },
    saleDate: '02-01-2021',
    customer: 'Sun',
    type: 'Credit'
  },
  {
    id: 8,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '02-01-2021',
    customer: 'Snap',
    discount: 0.1,
    type: 'Credit'
  },
  {
    id: 9,
    product: {
      id: 5,
      name: 'iPhone',
      model: '11 Pro',
      unitPrice: 36900
    },
    saleDate: '02-01-2021',
    customer: 'Ham',
    discount: 0.25,
    type: 'Credit'
  },
  {
    id: 10,
    product: {
      id: 6,
      name: 'Samsung',
      model: 'A31',
      unitPrice: 7999
    },
    saleDate: '02-01-2021',
    customer: 'Ham',
    discount: 0.25,
    type: 'Credit'
  },
  {
    id: 11,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 48900
    },
    saleDate: '02-01-2021',
    customer: 'Tle',
    discount: 0.3,
    type: 'Airpay'
  },
  {
    id: 12,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 48900
    },
    saleDate: '02-01-2021',
    customer: 'Micky',
    type: 'Credit'
  },
  {
    id: 13,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '02-01-2021',
    customer: 'Boss',
    type: 'Cash'
  },
  {
    id: 14,
    product: {
      id: 7,
      name: 'Oppo',
      model: 'Reno5',
      unitPrice: 19990
    },
    saleDate: '02-01-2021',
    customer: 'Sila',
    type: 'Airpay'
  },
  {
    id: 15,
    product: {
      id: 8,
      name: 'Xiaomi',
      model: 'Redmi 9C',
      unitPrice: 3399
    },
    saleDate: '02-01-2021',
    customer: 'Top',
    type: 'Cash'
  },
  {
    id: 16,
    product: {
      id: 9,
      name: 'Samsung',
      model: 'A42',
      unitPrice: 11990
    },
    saleDate: '03-01-2021',
    customer: 'Cin',
    type: 'Cash'
  },
  {
    id: 17,
    product: {
      id: 6,
      name: 'Samsung',
      model: 'A31',
      unitPrice: 7999
    },
    saleDate: '03-01-2021',
    customer: 'Cin',
    type: 'Cash'
  },
  {
    id: 18,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 36900
    },
    saleDate: '03-01-2021',
    customer: 'Sine',
    discount: 0.3,
    type: 'Airpay'
  },
  {
    id: 19,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '03-01-2021',
    customer: 'Note',
    type: 'Credit'
  },
  {
    id: 20,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '03-01-2021',
    customer: 'Micky',
    type: 'Credit'
  },
  {
    id: 21,
    product: {
      id: 10,
      name: 'Vivo',
      model: 'V20 Pro',
      unitPrice: 14999
    },
    saleDate: '04-01-2021',
    customer: 'Bank',
    type: 'Cash'
  },
  {
    id: 22,
    product: {
      id: 10,
      name: 'Vivo',
      model: 'V20 Pro',
      unitPrice: 14999
    },
    saleDate: '04-01-2021',
    customer: 'Bank',
    type: 'Cash'
  },
  {
    id: 23,
    product: {
      id: 7,
      name: 'Oppo',
      model: 'Reno5',
      unitPrice: 19990
    },
    saleDate: '04-01-2021',
    customer: 'Leo',
    type: 'Cash'
  },
  {
    id: 24,
    product: {
      id: 9,
      name: 'Samsung',
      model: 'A42',
      unitPrice: 11990
    },
    saleDate: '04-01-2021',
    customer: 'Game',
    type: 'Cash'
  },
  {
    id: 25,
    product: {
      id: 6,
      name: 'Samsung',
      model: 'A31',
      unitPrice: 7999
    },
    saleDate: '04-01-2021',
    customer: 'U',
    discount: 0.3,
    type: 'Airpay'
  },
  {
    id: 26,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 48900
    },
    saleDate: '05-01-2021',
    customer: 'Boy',
    type: 'Credit'
  },
  {
    id: 27,
    product: {
      id: 11,
      name: 'Vivo',
      model: 'X50 Pro',
      unitPrice: 19999
    },
    saleDate: '05-01-2021',
    customer: 'Boom',
    type: 'True Wallet'
  },
  {
    id: 28,
    product: {
      id: 12,
      name: 'Vivo',
      model: 'V20',
      unitPrice: 10999
    },
    saleDate: '05-01-2021',
    customer: 'Boom',
    type: 'True Wallet'
  },
  {
    id: 29,
    product: {
      id: 9,
      name: 'Samsung',
      model: 'A42',
      unitPrice: 11990
    },
    saleDate: '05-01-2021',
    customer: 'Am',
    type: 'Cash'
  },
  {
    id: 30,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '06-01-2021',
    customer: 'Um',
    type: 'True Wallet'
  },
  {
    id: 31,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '06-01-2021',
    customer: 'Win',
    discount: 0.25,
    type: 'Airpay'
  },
  {
    id: 32,
    product: {
      id: 7,
      name: 'Oppo',
      model: 'Reno5',
      unitPrice: 19990
    },
    saleDate: '06-01-2021',
    customer: 'Cin',
    type: 'Cash'
  },
  {
    id: 33,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '07-01-2021',
    customer: 'Palm',
    discount: 0.1,
    type: 'Credit'
  },
  {
    id: 34,
    product: {
      id: 5,
      name: 'iPhone',
      model: '11 Pro',
      unitPrice: 36900
    },
    saleDate: '07-01-2021',
    customer: 'Dom',
    discount: 0.15,
    type: 'Credit'
  },
  {
    id: 35,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '07-01-2021',
    customer: 'Sern',
    type: 'True Wallet'
  },
  {
    id: 36,
    product: {
      id: 13,
      name: 'iPhone',
      model: 'SE2000',
      unitPrice: 14900
    },
    saleDate: '07-01-2021',
    customer: 'Beer',
    type: 'Cash'
  },
  {
    id: 37,
    product: {
      id: 14,
      name: 'iPhone',
      model: '12 Mini',
      unitPrice: 25900
    },
    saleDate: '07-01-2021',
    customer: 'Game',
    discount: 0.2,
    type: 'Credit'
  },
  {
    id: 38,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '07-01-2021',
    customer: 'Sun',
    discount: 0.25,
    type: 'Airpay'
  },
  {
    id: 39,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '07-01-2021',
    customer: 'Tom',
    type: 'Cash'
  },
  {
    id: 40,
    product: {
      id: 14,
      name: 'iPhone',
      model: '12 Mini',
      unitPrice: 25900
    },
    saleDate: '08-01-2021',
    customer: 'Ham',
    type: 'Cash'
  },
  {
    id: 41,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '08-01-2021',
    customer: 'Dom',
    type: 'Credit'
  },
  {
    id: 42,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '08-01-2021',
    customer: 'Cin',
    type: 'True Wallet'
  },
  {
    id: 43,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '08-01-2021',
    customer: 'Tle',
    type: 'Cash'
  },
  {
    id: 44,
    product: {
      id: 7,
      name: 'Oppo',
      model: 'Reno5',
      unitPrice: 19990
    },
    saleDate: '09-01-2021',
    customer: 'U',
    type: 'Cash'
  },
  {
    id: 45,
    product: {
      id: 11,
      name: 'Vivo',
      model: 'X50 Pro',
      unitPrice: 19999
    },
    saleDate: '09-01-2021',
    customer: 'Am',
    discount: 0.35,
    type: 'Airpay'
  },
  {
    id: 46,
    product: {
      id: 10,
      name: 'Vivo',
      model: 'V20 Pro',
      unitPrice: 14999
    },
    saleDate: '10-01-2021',
    customer: 'Sern',
    type: 'Cash'
  },
  {
    id: 47,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 48900
    },
    saleDate: '10-01-2021',
    customer: 'Game',
    discount: 0.3,
    type: 'Credit'
  },
  {
    id: 48,
    product: {
      id: 9,
      name: 'Samsung',
      model: 'A42',
      unitPrice: 11990
    },
    saleDate: '10-01-2021',
    customer: 'Jit',
    type: 'Cash'
  },
  {
    id: 49,
    product: {
      id: 14,
      name: 'iPhone',
      model: '12 Mini',
      unitPrice: 25900
    },
    saleDate: '10-01-2021',
    customer: 'Snap',
    type: 'True Wallet'
  },
  {
    id: 50,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '10-01-2021',
    customer: 'Micky',
    type: 'Cash'
  },
  {
    id: 51,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '11-01-2021',
    customer: 'Boss',
    discount: 0.2,
    type: 'Credit'
  },
  {
    id: 52,
    product: {
      id: 8,
      name: 'Xiaomi',
      model: 'Redmi 9C',
      unitPrice: 3399
    },
    saleDate: '11-01-2021',
    customer: 'Leo',
    discount: 0.05,
    type: 'Credit'
  },
  {
    id: 53,
    product: {
      id: 10,
      name: 'Vivo',
      model: 'V20 Pro',
      unitPrice: 14999
    },
    saleDate: '11-01-2021',
    customer: 'Sine',
    discount: 0.15,
    type: 'True Wallet'
  },
  {
    id: 54,
    product: {
      id: 14,
      name: 'iPhone',
      model: '12 Mini',
      unitPrice: 25900
    },
    saleDate: '07-01-2021',
    customer: 'Um',
    discount: 0.1,
    type: 'Cash'
  }
];

// 1. จำนวน transaction ทั้งหมด
let totalTransaction = sales.length;
console.log(totalTransaction);


// 2. จำนวนลูกค้าที่แตกต่างกัน มีใครบ้าง แต่ละคนซื้อไปยอดรวมกันเท่าไหร่ กี่เครื่อง
const getCustomer = (obj, trans) => { 
  let customer = trans.customer;
  let price = trans.product.unitPrice;
  let discount = trans.discount ?? 0;

  if (!(trans.customer in obj)) {
    obj[customer] = ({totalspend: price * (1 - discount), totalItems: 1});
  }
  else {
    obj[customer].totalspend += price * (1 - discount);
    obj[customer].totalItems += 1;
  }

  return obj;
} 

const customers = sales.reduce(getCustomer, {})
console.log(customers);


// 3. ยอดขายทั้งหมด (หลังหัก discount)
const sumTotalSpendFromCustomer = (obj) => {
  let sum = 0;

  for (const customer in obj) {
    sum += obj[customer].totalspend;
  } 
  return sum;
}
let totalSpend = sumTotalSpendFromCustomer(customers);
console.log(totalSpend);


// 4. สินค้าที่ถูกขายมี่กี่ยี่ห้อ แต่ละยี่ห้อขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่
const sumByBrand = (obj, cur) => {
  let brand = cur.product.name;
  let price = cur.product.unitPrice;
  let discount = cur.discount ?? 0;

  if (brand in obj) {
    obj[brand].totalSales += price * (1 - discount); 
    obj[brand].totalSold++; 
  }
  else {
    obj[brand] = {totalSales: (price * (1 - discount)), totalSold: 1};
  }

  return obj;
}

const brand = sales.reduce(sumByBrand, {});
console.log(brand);


// 5. สินค้าที่ถูกขายมีกี่รุ่นในแต่ละยี่ห้อ แต่ละรุ่นขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่
const sumByBrandNModel = (obj, cur) => {
  let brand = cur.product.name;
  let model = ""+cur.product.model;
  let finalPrice = cur.product.unitPrice * (1 - (cur.discount ?? 0));

  if (!(brand in obj)) {
    obj[brand] = {};
  }
  if (model in obj[brand]) {
    obj[brand][model].totalSales += finalPrice; 
    obj[brand][model].totalSold++; 
  }
  else {
    obj[brand][model] = {totalSales: finalPrice, totalSold: 1};
  }

  return obj;
}

const brandNModel = sales.reduce(sumByBrandNModel, {});
console.log(brandNModel);


// 6. หายอดรวมของการจ่ายแต่ละประเภท (Cash, Credit, ...)
const sumByPayMethod = (obj ,cur) => {
  let payMethod = cur.type;
  let finalPrice = cur.product.unitPrice * (1 - (cur.discount ?? 0));

  obj[payMethod] = obj[payMethod] ? obj[payMethod] + finalPrice : finalPrice;

  return obj;
}

const payMethod = sales.reduce(sumByPayMethod, {});
console.log(payMethod);


// 7. หายอดรวมในแต่ละวัน
const sumByDate = (obj ,cur) => {
  let date = cur.saleDate;
  let finalPrice = cur.product.unitPrice * (1 - (cur.discount ?? 0));

  obj[date] = obj[date] ? obj[date] + finalPrice : finalPrice;

  return obj;
}
const saleDate = sales.reduce(sumByDate, {});
console.log(saleDate);


// 8. เรียงยอดขายของแต่ละรุ่นจากมากไปน้อย
const sortByModelSales = (a, b) => b[1].totalSales - a[1].totalSales;
const model = {}
for (const brand in brandNModel) {
  // console.log(m);
  Object.assign(model, brandNModel[brand]);
}

const sortedModelArr = Object.entries(model).sort(sortByModelSales);
console.log(sortedModelArr);

// 9. เรียงลูกค้าที่ซื้อมากที่สุดจากมากไปน้อย
const sortByTotalSpender = (a, b) => b[1].totalspend - a[1].totalspend;

const sortedCustomersArr = Object.entries(customers).sort(sortByTotalSpender);
console.log(sortedCustomersArr)












