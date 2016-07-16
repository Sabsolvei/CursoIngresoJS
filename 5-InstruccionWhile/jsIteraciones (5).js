function Mostrar()
{

var sexo="9" ;

while(sexo!="F" && sexo!="M")
{
	sexo = prompt("ingrese f ó m .").toUpperCase();
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN