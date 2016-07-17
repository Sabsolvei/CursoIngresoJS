function Mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var minimo=0;
	var maximo=0;
	var respuesta='si';

	while(respuesta!='no')
	{
		numero=prompt('Ingrese un número');
		if(numero!=null)
		{
			if(numero>=maximo)
			{
				maximo=numero;
			}
			else
			{
				if(numero<=minimo)
				{
					minimo=numero;
				}
			}
		}
		else
		{
			respuesta='no';
		}

		document.getElementById('maximo').value=maximo
		document.getElementById('minimo').value=minimo
	}
}//FIN DE LA FUNCIÓN