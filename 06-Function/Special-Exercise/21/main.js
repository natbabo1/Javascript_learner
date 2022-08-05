const draw = num => {
    let r="";
    let c=1;
    for(let i = 0; i < num; i++) {
        let line='';
        for(let j = 1; j <= 2 * num - 1; j++) {
            line += (j < num - i || j > i + num) ? '_' : '*';
        }
        r += line+"\n";
    }
    return r.trim();
};

alert(draw(+prompt("")));