function max(a, b = -Infinity, c = -Infinity, d = -Infinity) {
    if ((a != undefined && isNaN(a)) || isNaN(b) || isNaN(c) || isNaN(d)) { 
        return NaN; }
    else if (a > b && a > c && a > d) 
        return a;
    else if (b > c && b > d) 
        return b;
    else if (c > d)
        return c;
    else if (d > c) 
        return d;
}
console.log(max()); // undefined
console.log(max(2)); // 2
console.log(max(3, 1)); // 3
console.log(max(7, 3, 9, 2)); // 9