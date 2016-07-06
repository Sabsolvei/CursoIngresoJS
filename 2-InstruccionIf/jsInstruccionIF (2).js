function Mostrar()
{
//tomo la edad  
var edad = document.getElementById('edad').value;
edad=parseInt(edad)
if (edad>=18)
{
	alert("La persona es mayor de edad");
}

else
{
	alert("La persona es menor de edad");
}
}//FIN DE LA FUNCIÓN