/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	
	var fahrenheit = document.getElementById('Temperatura').value;

	var transformarFaC = (fahrenheit-32)*(5/9);

	alert(transformarFaC);

}

function CentigradosFahrenheit () 
{
	var centigrados = document.getElementById('Temperatura').value;
	centigrados = parseInt(centigrados);
	var transformarCaF = (centigrados*9/5)+32;

	alert(transformarCaF);



}
