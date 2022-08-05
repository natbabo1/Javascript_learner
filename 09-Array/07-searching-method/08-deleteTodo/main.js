const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];


function deleteTask(id) {
    let tarId = tasks.findIndex(ele => ele.id === id);
    tasks.splice(tarId, 1);
}

deleteTask(1)
console.log(tasks);