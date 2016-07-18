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

	document.writeln("<br>Suma de positivos: "+positivos);
	document.writeln("<br>Suma de negativos: "+negativos);
	document.writeln("<br>Positivos acumulados: "+acumPositivos);
	document.writeln("<br>Negativos acumulados: "+acumNegativos);
	document.writeln("<br>Ceros acumulados: "+acumCeros);
	document.writeln("<br>Nros pares acumulados: "+acumPares);
	document.writeln("<br>Promedio de positivos: "+positivos/acumPositivos);
	document.writeln("<br>Promedio de negativos: "+negativos/acumNegativos);
	document.writeln("<br>Diferencia de positivos y negativos: "+(positivos-(negativos*(-1))));

}//FIN DE LA FUNCIÓN