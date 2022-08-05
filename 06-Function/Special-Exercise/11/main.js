const draw = num => {
    let r="";
    for(let i=0; i<num; i++) {
        let line='';
        for(let j=0; j<num; j++) {
            line += j==i ? "_" : "*";
        }
        r += line+"\n";
    }
    return r;
};

alert(draw(+prompt("")));