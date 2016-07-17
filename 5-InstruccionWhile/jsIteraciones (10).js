function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numero;
	var positivos=0;
	var negativos=0;
	var ceros;
	var acumPares=0;
	var acumPositivos=0;
	var acumNegativos=0;
	var acumCeros=0;
	var difPosNeg;
	var respuesta="si";

	while(respuesta!="no")
	{
		numero=prompt("Ingrese un número");

		if(numero!=null)
		{
			if(numero<0)
			{
				negativos=parseInt(negativos)+parseInt(numero);
				acumNegativos++;
			}
			else
			{
				if(numero>0)
				{

					positivos=parseInt(positivos)+parseInt(numero);
					acumPositivos++;
				}
				else
				{
					acumCeros++;
				}
			}
			if(numero%2==0)
			{
				acumPares++;
			}

		}//FIN IF
	
		else
		{
			respuesta='no';
		}

	}//FIN WHILE

	document.writeln(positivos);
	document.writeln(negativos);
	document.writeln(acumPositivos);
	document.writeln(acumNegativos);
	document.writeln(acumCeros);
	document.writeln(acumPares);
	document.writeln(positivos/acumPositivos);
	document.writeln(negativos/acumNegativos);
	document.writeln(positivos-(negativos*(-1)));

}//FIN DE LA FUNCIÓN