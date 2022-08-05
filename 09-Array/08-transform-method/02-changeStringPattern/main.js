function dashToCamel(ele) { 
    let dashIndex = ele.indexOf('-');
    let nextCamel = dashIndex + 1;

    if (dashIndex !== -1)
        return ele.slice(0,dashIndex) + ele[nextCamel].toUpperCase() + ele.slice(nextCamel+1);
    else
        return ele;
}

const test = ['background-color', 'ggggg-dasdf', 'aaadfsdf'];

const re = test.map(dashToCamel);

console.log(re);