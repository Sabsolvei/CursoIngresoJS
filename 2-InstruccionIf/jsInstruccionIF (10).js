function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
var nota;
nota = Math.floor((Math.random()*10)+1);

if (nota <11 && nota>8)
{
	alert("Su nota es: "+nota+". EXCELENTE");
}
	else
	{
		if (nota >3 && nota <9)
		{
			alert("Su nota es: "+nota+". Aprobado");
		}
			else
			{
				alert("Su nota es: "+nota+". Vamos, la próxima se puede");
			}
	}


}//FIN DE LA FUNCIÓN