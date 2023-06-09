alert("Bienvenido a calculadora virtual: haga click en aceptar para comenzar a operar.")
let num1=Number(prompt("Ingresa el primer numero"));
let num2=Number(prompt("Ingresa el segundo numero"));

let suma = (num1, num2) => {
    return num1 + num2;
}
let resta= (num1, num2) => {
    return num1 - num2;
}
let multiplicacion=(num1, num2) =>{
    return num1 * num2;
}
let divsion= (num1, num2) =>{
    return num1 / num2;
}
let operacion=prompt("Escribe la operacion que deseas realisar(suma, resta, multiplicacion o division.");
const Calculadora = (operacion, num1, num2)=>{
resultado="";
if(operacion==="suma"){
    resultado= suma(num1, num2);
}
if (operacion==="resta"){
    resultado=resta(num1, num2);
}
if (operacion==="multiplicacion"){
    resultado=multiplicacion(num1, num2);
}
else if(operacion==="division"){
    resultado=divsion(num1, num2);
}
document.write("El resultado de la operacion es: "+resultado)
}
Calculadora(operacion, num1,num2 );