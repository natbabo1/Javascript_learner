const persons = [
    { name: 'John', sex: 'M' },
    { name: 'Jody', sex: 'M' },
    { name: 'Susan', sex: 'F' },
    { name: 'Kate', sex: 'F' },
    { name: 'Sid', sex: 'M' }
  ];
  
  const groupBySex = (obj, cur) => {
      if (!(cur.sex in obj))
      obj[cur.sex] = [cur.name];
      else
      obj[cur.sex].push(cur.name);
      return obj;
    }
    
    const personGroupBySex = persons.reduce(groupBySex, {});
    
    console.log(personGroupBySex);
    // expexted result: { M: ['John', 'Jody', 'Sid'], F: ['Susan', 'Kate'] }