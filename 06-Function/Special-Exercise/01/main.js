const draw = num => {
    let r="";
    for(let i=0; i<num; i++) {
        r+="*";
    }
    return r;
};

alert(draw(+prompt("")))