function postFixExp(str) {
    var stack = [],
        sum = 0;

    for (let i = 0; i < str.length; i++) {
        let check = Number(str[i]);
        if (typeof check === 'number') {
            stack.push(check);

        } else {
            let a = stack.pop(),
                b = stack.pop();
            if (str[i] === '+') sum += parseInt(a) + parseInt(b);
            else if (str[i] === '-') sum += parseInt(b) - parseInt(a);
            else if (str[i] === '*') sum += parseInt(b) * parseInt(a);
            else if (str[i] === '/') sum += parseInt(b) / parseInt(a);
            else if (str[i] === '^') sum += parseInt(b) ^ parseInt(a);
            console.log(sum);

        }
    }
    console.log(sum);
    console.log(stack);


}

postFixExp("2+4+4*6");