const mergeObjects = (...objs) =>
  objs
    .reverse()
    .reduce((mergedObj, curObj) => Object.assign(mergedObj, curObj), {});

const a = {
  id: 1,
  product: {
    id: 1,
    name: "iPhone",
    model: "12 Pro",
    unitPrice: 48900
  },
  saleDate: "01-01-2021",
  customer: "Sun",
  discount: 0.2,
  type: "Cash"
};
const b = {
  state: "NH"
};
const c = {
  Learned: "dead",
  id: 0
};

const merged = mergeObjects(a, b, c);

console.log(merged);
