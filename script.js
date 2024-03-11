function test(){
    alert("JS maravilhoso vitaminado funcionando");
}

function calcula(){
    // criar a variavel
    let num1;
    // recebe texto do html
    num1=document.getElementById("numero1").value;
    // transforma texto em numero real
    let num1real=parseFloat(num1);

    let num2;
    // recebe texto do html
    num2=document.getElementById("numero2").value;
    // transforma texto em numero real
    let num2real=parseFloat(num2);

    let result;
    result=num1real+num2real;

    document.getElementById("resultado").innerHTML=result;
}