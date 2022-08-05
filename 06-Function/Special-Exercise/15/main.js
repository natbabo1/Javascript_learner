const draw = num => {
    let r="";
    for(let i= 1 - num; i < num; i++) {
        let line='';
        for(let j = num; j > 0; j--) {
            line += j ** 2 > i ** 2 ? "*" : "_";
        }
        r += line+"\n";
    }
    return r.trim();
};

alert(draw(+prompt("")));