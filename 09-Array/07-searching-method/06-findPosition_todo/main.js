const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];

  let target = 2;

  console.log(tasks.findIndex(ele => ele.id === target));
  // expexted result: 1