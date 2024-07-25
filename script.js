const display = document.getElementById("text")
let  res = 0;

function input(val){
    display.value += val
}

function result(){
    res = eval(display.value)
    display.value = res;
}

function clr(){
    display.value = ""
}

function del(){
    let string = display.value;
    // console.log(string)
    display.value = string.substring(0,(display.value).length-1);

}