const draw = num => {
    let r="";
    for(let i=1; i<=num; i++) {
        let line='';
        for(let j=0; j<num; j++) {
            line += i+j;
        }
        r += line+"\n";
    }
    return r;
};

alert(draw(+prompt("")));