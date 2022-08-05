const draw = num => {
    let r="";
    for(let i=0; i<num; i++) {
        let line='';
        for(let j=num; j>0; j--) {
            line += j > i ? "*" : "_";
        }
        r += line+"\n";
    }
    return r;
};

alert(draw(+prompt("")));