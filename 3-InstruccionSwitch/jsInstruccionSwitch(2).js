function Mostrar()
{
//tomo la edad  
	var mes = document.getElementById('mes').value;
	
	switch(mes)
	{
		case "Julio":
		case "Agosto":
		
			alert("Abrigate que hace frio!");
		
		break;
		

		case "Junio":
		case "Mayo":
		case "Abril":
		
			alert("Aun no llegó el invierno");
		
		break;
		
		
		default:
			
			alert("Ya pasamos el frio, ahora calor!");	
		
		break;

	}


}//FIN DE LA FUNCIÓN