/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var numeroUno;
var numeroDos;
var operador;
var respuesta;

function comenzar()
{

	numeroUno	= Math.floor((Math.random()*10)+1);
	numeroDos	= Math.floor((Math.random()*10)+1);
	operador 	= Math.floor((Math.random()*4)+1);
	document.getElementById('PrimerNumero').value	=numeroUno;
	document.getElementById('SegundoNumero').value	=numeroDos;
	
	switch(operador)
	{
		case 1:
			document.getElementById('Operador').value='+';
		break;

		case 2:
			document.getElementById('Operador').value='-';
		break;

		case 3:
			document.getElementById('Operador').value='*';
		break;

		case 4:
			document.getElementById('Operador').value='/';
		break;
	}
}//FIN DE LA FUNCIÓN


function Responder()
{
	respuesta= document.getElementById('Respuesta').value;

	switch(operador)
	{
		case 1:
			if (respuesta==(parseInt(numeroUno)+parseInt(numeroDos)))
			{
				alert('Correcto!');
			}
			else
			{
				alert('Incorrecto');
			}
		break;

		case 2:
			if (respuesta==(numeroUno-numeroDos))
			{
				alert('Correcto!');
			}
			else
			{
				alert('Incorrecto');
			}
		break;

		case 3:
			if(respuesta==(numeroUno*numeroDos))
			{
				alert('Correcto!');
			}
			else
			{
				alert('Incorrecto');
			}
		break;

		case 4:
			if(respuesta==(numeroUno/numeroDos).toFixed(2))
			{
				alert('Correcto!');
			}
			else
			{
				alert('Incorrecto');
			}
			break;
	}
}//FIN DE LA FUNCIÓN
