const draw = num => {
    let r="";
    for(let i=0; i<num; i++) {
        r += i*2+"\n";
    }
    return r;
};

alert(draw(+prompt("")));