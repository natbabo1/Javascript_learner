const extractCurrencyValue = (str, rate) => "THB" + (str.slice(1) * rate);

console.log(extractCurrencyValue("$120", 30))