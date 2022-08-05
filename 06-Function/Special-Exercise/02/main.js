const draw = num => {
    let r="";
    let line='';
    for(let i=0; i<num; i++) {
        line+="*";
    }
    for(let i=0; i<num; i++) {
        r += line+"\n";
    }
    return r;
};

alert(draw(+prompt("")));