/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

var numeroSecreto; 
var contadorIntentos=0;
var numeroIngresado;

function comenzar()
{
	
	numeroSecreto = Math.floor((Math.random()*20)+1);
	alert('Es su turno. Ingreses un número')

}
	function verificar()
	{
		numeroIngresado=document.getElementById('numero').value;
		numeroIngresado=parseInt(numeroIngresado);
		contadorIntentos=parseInt(contadorIntentos)+1;

		if(numeroSecreto<numeroIngresado)
		{
			alert('Se pasó');
		}
		else if(numeroSecreto>numeroIngresado)
		{
			alert('Le faltó');
		}
		else if(numeroSecreto==numeroIngresado)
		{
			alert('¡Usted es un ganador. Y en solo '+contadorIntentos +' intentos!');
		}

		document.getElementById('numero').value=numeroIngresado;
		document.getElementById('intentos').value=contadorIntentos;

	}






