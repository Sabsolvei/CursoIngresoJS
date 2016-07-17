function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;


while(respuesta=='si')
{
	numero=prompt('Ingrese un numero');

	if(numero!=null)
	{
		contador++;
		acumulador=acumulador+parseInt(numero);
	}
	else
	{
		respuesta='no';
	}

}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN

