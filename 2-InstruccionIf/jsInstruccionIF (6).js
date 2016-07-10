function Mostrar()
{
//tomo la edad  
var edad = document.getElementById('edad').value;

	
/*ESTE CASO ESTÀ BIEN, PERO "USA 3 VECES EL PROCESADOR"

	if (edad>17) 
	{
		alert("La persona es mayor de edad");
	}
	if (edad>12 && edad<18)
	{
		alert("La persona es adolescente");
	}

	if (edad<13)
	{
		alert("La persona es menor de edad");
	}
			
}ESTE CASO SERÌA LA MEJOR FORMA DE RESOLVERLO PORQUE LO USA MAXIMO 2 VECES
*/

if(edad<13)
	{
		alert("La persona es menor de edad");
	}
	else
	{
		if(edad>17)
		{
			alert("Es mayor de edad");
		}
			
		else
		{
			alert("Es adolescente");
		}
	}
}

/*ESTE CASO ESTÀ MAL
if(edad<13)
	{
		alert("La persona es menor de edad");
	}
	
	{
if(edad>18)
	{
		alert("Es mayor de edad");
	}
			
	else
	{
		alert("Es adolescente");
	}
	
}
*/














	/*	if (edad>17) 
	{
			alert("La persona es mayor de edad");
	}
	if (edad>12 && edad<18)
	{
		alert("La persona es adolescente");
	}

	else
	{
		alert("La persona es menor de edad");
	}



}//FIN DE LA FUNCIÓN
*/