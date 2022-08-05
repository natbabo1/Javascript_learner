const draw = num => {
    let r="";
    for(let i=0; i<num; i++) {
        let line='';
        for(let j=0; j<num; j++) {
            line += num ** 2 - (i * num + j);
        }
        r += line+"\n";
    }
    return r;
};

alert(draw(+prompt("")));