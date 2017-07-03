// Ejercicio 1 - Ingresa 3 números y regresa el máximo y mínimo
var num1 = prompt("Hola! por favor ingresa un número");
var num2 = prompt("Ingresa otro número");
var num3 = prompt("Ingresa un número más");
var max = Math.max(num1,num2,num3);
var min = Math.min(num1,num2,num3);

document.write("El número máximo es " + max + '<br>' + "El número mínimo es " + min + '<br>');

console.log("El número máximo es " + max);
console.log("El número mínimo es " + min);

// Ejercicio 2 - Ingresa un Array y retorna índices de los pares e impares
var myArray = [15, 29, 78, 29, 40, 20, 18, 100, 78, 68] ;
var par = [];
var impar = [];
  for (var i = 0; i < myArray.length; i++) {
    if( i % 2 == 0){
      par += myArray[i]
    }
    else if (i % 2 == 1){
      impar += myArray[i]
    }
  }
document.write("Valores de los índices pares " + par + '<br>' + "Valores de los índices impares " + impar + '<br>');

/*
// Ejercicio 2 - Retorna los valores pares e impares
var array = [15,  29, 78, 29, 40, 20, 18, 100, 78, 68];
    nPar = [];
    nImpar = [];

nPar = array.filter(function(n){return n%2 == 0;});
nImpar = array.filter(function(n){return n%2 == 1;});
document.write("Elementos pares " + nPar + '<br>' + "Elementos inpares " + nImpar + '<br>');
*/
// Ejercicio 3 - Retornar el array al revés
var myArray = [1,2,3,4,5,6,7,8,9,0];
var res = myArray.reverse();
console.log(res);
document.write("Array al revés " + res + '<br>'+ '<br>');

// Ejercicio 4 - Piramide de números
function espacios (n)
{
  var s = "";
  for (var i = 0; i < n; i++)
   s += "*";
  return s;
}

var n = 5;
for (var k = 0; k < 2 * n - 1; k++) {
  var i = k < n ? k :  2*n - 2 - k;
  var content = "";
  for (j = 1; j <= 2*i+1; j++)
    content +=  j;
  var sp = espacios (n - (i+1));
  document.write(sp + content + '<br>');
}
