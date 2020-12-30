let inp = document.querySelector('.box'), out = document.querySelector('#output'), kt = document.querySelector('.key'), out2 = document.querySelector('.out');

const keyGen = () => Math.max(Math.floor(Math.random() * 95320348507623),23703568051304);

function encrypt(){
    let key=keyGen(), data=inp.value;
    for (i=65;i<=90;i++) data = data.replace(new RegExp(String.fromCharCode(i),'g'),(key+i).toString());
    for (i=97;i<=122;i++) data = data.replace(new RegExp(String.fromCharCode(i),'g'),(key*2+i).toString());
    data = data.split("").reverse().join("");
    for (i=48;i<=57;i++) data = data.replace(new RegExp(String.fromCharCode(i),'g'),String.fromCharCode(i+20));
    out.value = data;
    out2.value = key;
}

function decrypt(){
    let data = inp.value, key = parseInt(kt.value);
    for (i=48;i<=57;i++) data = data.replace(new RegExp(String.fromCharCode(i+20),'g'),String.fromCharCode(i));
    data = data.split("").reverse().join("");
    for (i=65;i<=90;i++) data = data.replace(new RegExp((key+i).toString(),'g'),String.fromCharCode(i));
    for (i=97;i<=122;i++) data = data.replace(new RegExp((key*2+i).toString(),'g'),String.fromCharCode(i));
    out.value = data;
}