function Mostrar()
{
//tomo la edad  
var edad = document.getElementById('edad').value;
var estado = document.getElementById('estadoCivil').value;

if (edad>17 && estado=='Soltero')
	{
		alert("Es soltero y no es menor de edad");
	}
	


}//FIN DE LA FUNCIÓN