const draw = num => {
    let r="";
    let c=1;
    for(let i= 1 - num; i < num; i++) {
        let line='';
        for(let j = 0; j < 2 * num - 1; j++) {
            line += (j ** 2 < i ** 2) || (j >= num + (num - Math.abs(i) - 1)) ? "-" : c++;
        }
        r += line+"\n";
    }
    return r.trim();
};

alert(draw(+prompt("")));