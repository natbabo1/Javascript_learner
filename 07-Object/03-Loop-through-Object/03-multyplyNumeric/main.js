let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
  };
  
  
  // after call function multiplyNumeric(menu, 3)
//   menu = {
//     width: 600,
//     height: 900,
//     title: 'My menu'
//   };

const multiplyNumeric = (obj, num) => {
  const result = {};  
  for (p in obj) 
        result[p] = typeof(obj[p]) == "number" ? obj[p] * num : obj[p];
  return result;
}

console.log(multiplyNumeric(menu, 3));