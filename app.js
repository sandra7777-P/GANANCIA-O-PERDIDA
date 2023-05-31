//ingresos
var income = prompt("¿Cuanto es el ingreso?");//400
// costos
var costs = prompt("¿Cuanto es el costo");//65
//porcentaje de impuestos
var taxPercent = prompt("¡Cuanto es el porcentaje(%)?");//18
// ganancia bruta
var grossprofit = income-costs; //335
// obteniendo cantidad de impuestos
var tax = grossprofit*taxPercent/100; //60.3
// ganancia neta
var netIncome = grossprofit-tax;
//mostrando ganancia neta
document.write("Tu ganancia neta es $" + netIncome);
