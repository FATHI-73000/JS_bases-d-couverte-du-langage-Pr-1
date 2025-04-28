// you can write js here
console.log('hello from file');
var kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");
var celsius = kelvins-273;
 console.log( " la température en celsius est de" + celsius+ "°c.") ;//  la température en Kelvin est convertie en Celsius en soustrayant 273 pour 21 °c.

var fahrenheits= celsius*(9/5)+32;
console.log( " la température en fahrenheits est de " + fahrenheits+ "°c"  )  ; // // Cette ligne convertit la température en Celsius en Fahrenheit en utilisant la formule : Fahrenheit = Celsius * (9/5) + 32.  

fahrenheits= match.floor(celsius*(9/5)+32);  //// Utilise Math.floor() pour arrondir la température en Fahrenheit et stocke le résultat dans Fahrenheit.
console.log (match.floor(celsius*(9/5)+32));
console.log("La température en Fahrenheit arrondie est de " + fahrenheits + "°F.");
