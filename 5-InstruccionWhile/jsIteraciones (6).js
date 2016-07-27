function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	while(contador<5)
	{
		contador=contador + 1;
		numero=prompt("Ingrese un número");
		while(isNaN(numero))
		{
			alert("No es un número")
			numero=prompt("Ingrese un número");
		}	
	
		acumulador=acumulador+parseInt(numero);

		
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN