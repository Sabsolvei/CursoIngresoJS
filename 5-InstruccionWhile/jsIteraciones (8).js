function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';


	while(respuesta=='si')
	{
		numero=prompt('Ingrese un número');

		if(numero!=null)
		{
			if(numero>=0)
			{
				positivo=positivo+parseInt(numero);		
				contador++;
			}
			else
			{
				negativo=negativo*parseInt(numero);
				contador++;
			}
		}
		else
		{
			respuesta='no';
		}
	
	}//while


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN