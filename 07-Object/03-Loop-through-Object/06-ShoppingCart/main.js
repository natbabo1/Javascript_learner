// let productName = prompt("Product");
// let productAmount = prompt("Amount");
// let productPrice = prompt("Price");
// let productDiscount = prompt("Discount (%)");
const product = {
    name: prompt("Product"),
    amount: +prompt("Amount"),
    price: +prompt("Price"),
} 
let discount = +prompt("Discount (%)")
if (discount !== 0) 
    product.discount = discount;

// console.log(product);

function calFinalPrice(product) {
    if ("discount" in product)
        return product.price * (100-product.discount) / 100;
    return product.price;
}

console.log(calFinalPrice(product));


