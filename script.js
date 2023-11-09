let inps = document.getElementById('display')


function AT_add(v){
    inps.value +=v;
}
function equal(){
    inps.value = eval(inps.value)
}
function cancle(){
    inps.value =""
}

function dlt(){
    inps.value = inps.value.substr(0,inps.value.length -1)
}
