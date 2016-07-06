function Mostrar()
{
//tomo la edad  
var edad= document.getElementById('edad').value;
edad= parseInt(edad);//averiguar como hacer para que acepte solo nùmeros el campo

if (edad==15)
	{
		alert("Niña bonita");
	}

else
{
	alert("Mujer bonita");
}

}//FIN DE LA FUNCIÓN