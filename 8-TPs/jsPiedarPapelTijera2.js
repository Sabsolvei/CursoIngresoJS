var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;
var numeroSecreto;

function comenzar()
{

numeroSecreto= Math.floor(Math.random()*3)+1;


}//FIN DE LA FUNCIÓN

function piedra()
{

switch numeroSecreto
{
	case 1:
	alert('Empatados')
	ContadorDeEmpates++
	break;

	case 2:
	alert('Usted perdió')
	ContadorDePerdidas++
	break;

	case 3:
	alert('Usted ganó')
	ContadorDeGanadas++
	break;
}


}//FIN DE LA FUNCIÓN
function papel()
{


}//FIN DE LA FUNCIÓN


function tijera()
{


}//FIN DE LA FUNCIÓN

function mostarResultado()
{


}

/*

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	 	numeroSecreto =Math.floor( Math.random()*3)+1;
		//alert(numeroSecreto);
		switch(numeroSecreto)
		{
			case 1:
				eleccionMaquina="piedra";
				break;
			case 2:
				eleccionMaquina="papel";
				break;
			case 3:
				eleccionMaquina="tijera";
				break;

		}
		//alert(eleccionMaquina);

}//FIN DE LA FUNCIÓN

function piedra()
{
	alert("la maquina selecciono: "+eleccionMaquina);
	eleccionHumano="piedra";
	if(eleccionHumano==eleccionMaquina)
	{
		alert("empate.");	
		ContadorDeEmpates++;	
	}
	else if(eleccionMaquina=="tijera")
	{
		alert("vos ganaste.");
		ContadorDeGanadas++;
	}
	else
	{
		alert("ganó la Maquina.");
		ContadorDePerdidas++;
	}

mostarResultado();

}//FIN DE LA FUNCIÓN
function papel()
{
	alert("la maquina selecciono: "+eleccionMaquina);
	eleccionHumano="papel";
	if(eleccionHumano==eleccionMaquina)
	{
		alert("empate.");
		ContadorDeEmpates++;		

	}
	else if(eleccionMaquina=="piedra")
	{
		alert("vos ganaste.");
		ContadorDeGanadas++;
	}
	else
	{
		alert("ganó la Maquina.");
		ContadorDePerdidas++;
	}
mostarResultado();
}//FIN DE LA FUNCIÓN
function tijera()
{
	alert("la maquina selecciono: "+eleccionMaquina);
	eleccionHumano="tijera";
	if(eleccionHumano==eleccionMaquina)
	{
		alert("empate.");
		ContadorDeEmpates++;		
	}
	else if(eleccionMaquina=="papel")
	{
		alert("vos ganaste.");
		ContadorDeGanadas++;
	}
	else
	{
		alert("ganó la Maquina.");
		ContadorDePerdidas++;
	}
mostarResultado();
}//FIN DE LA FUNCIÓN

function mostarResultado()
{

document.getElementById('empatadas').value=ContadorDeEmpates + " partidas empatadas.";
document.getElementById('perdidas').value=ContadorDePerdidas + " partidas perdidas.";
document.getElementById('ganadas').value=ContadorDeGanadas + " partidas ganadas.";

comenzar();
}

*/