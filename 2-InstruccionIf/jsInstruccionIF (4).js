function Mostrar()
{
//tomo la edad  
var edad = document.getElementById('edad').value;

/*SE PUEDEN USAR LAS DOS OPCIONES- ES LO MISMO 

1. 
if (edad>12 && edad<=17)
{
	alert("La persona es una adolescente");

2. 
*/
if (edad>12)
{
	if (edad<18)
		{
			alert("La persona es una adolescente");
		}
}

}//FIN DE LA FUNCIÓN