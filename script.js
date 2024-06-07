function DeleteMe(){
document.getElementById("result").value = "";
}

function calculator(NewValue){
document.getElementById("result").value +=NewValue;
}

function answer(){
var a = eval(document.getElementById("result").value);
document.getElementById("result").value = a;
}