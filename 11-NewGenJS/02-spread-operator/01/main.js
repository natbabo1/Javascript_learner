const nums1 = [1, -2, 3, 4];
const nums2 = [8, 3, -8, 1];

const num3 = [5, ...nums1, -6, -1, ...nums2];

console.log(num3);
console.log(num3.reduce((sum, cur) => sum + cur, 0));
