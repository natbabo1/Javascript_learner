const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];

function updateTask(id, newName) {
    let targetId;
    targetId = tasks.findIndex(ele => ele.id === id);
    tasks[targetId].name = newName;
}

updateTask(2, 'Travelling');
console.log(tasks);