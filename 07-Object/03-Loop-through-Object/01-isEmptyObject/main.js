const isEmptyObject = obj => {
    for (p in obj) 
        return false;
    return true;
}

const obj1 = {};
const obj2 = {
    prop1: "value"
}

console.log(isEmptyObject(obj1));
console.log(isEmptyObject(obj2));
