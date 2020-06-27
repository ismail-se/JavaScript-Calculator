let input = document.querySelector('input');
let exp = document.querySelector('.exp');

const expression = e => {
    if (input.value == '0' && e != '.')
        input.value = "";
    input.value += e;
}

const operator = e => {
    let f = exp.innerText + input.value;
    if(exp.innerText[exp.innerText.length-1] == '='){
        exp.innerText = "";
    }
    exp.innerText += input.value + e;
    
    if (e == '='){
        console.log(exp.innerText[exp.innerText.length-1])
        let res = eval(f);
        input.value = res;
    } else {
        
        input.value = "0";
    }
    
    // input.value = "0";
}

const c = () => {
    input.value = "0";
    exp.innerHTML = "";
}

const ce = () => {
    input.value = "0";
}

const back = () => {
    input.value = input.value.slice(0,input.value.length-1)
}

const sqr = () => {
    let num = +input.value;
    let square = num*num;
    input.value = square;
    exp.innerText = `sqr(${num})=`;
}

const sqrt = () => {
    let num = +input.value;
    let square = Math.sqrt(num);
    input.value = square;
    exp.innerText = `sqrt(${num})=`;
}

const inverse = () => {
    let num = +input.value;
    let inv = 1/num;
    input.value = inv;
    exp.innerText = `1/${num}=`;
}

const percent = () => {
    let num = +input.value;
    input.value = num/100;
    exp.innerText = `${num}%=`;
}

const sign = () => {
    let num = +input.value;
    input.value = -num;
}