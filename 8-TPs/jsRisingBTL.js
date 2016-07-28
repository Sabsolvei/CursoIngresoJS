/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 var edad;
 var sexo='n';
 var estadoCivil=0;
 var sueldo=0;
 var legajo=0;
 var nacionalidad='L';

 edad=prompt("Ingrese su edad");
	 while(edad<18 || edad>90 && isNaN(edad))
	 {
	 	edad=prompt("Edad no permitida. Ingrese edad mayor a 18 y menor a 90");
	 }

	 while(sexo!='m' && sexo!='f')
	 {
	 	sexo=prompt("Ingrese su género F (femenino) o M (masculino)").toLowerCase();
	 	while(!isNaN(sexo))
		{
			sexo=prompt(sexo+" no es válido. Ingrese su género F (femenino) o M (masculino)");
		}	
	 }

	 while(estadoCivil<1 || estadoCivil>4)
	 {
	 	estadoCivil=prompt("Ingrese su estado civil");
	 	while(isNaN(estadoCivil))
	 	{
	 		estadoCivil=prompt(estadoCivil+" no es válido. Ingrese su estado civil");
	 	}
	 }
	 
	 	 while(sueldo<8000)
	 {
	 	sueldo=prompt("Ingrese su sueldo a partir de $ 8000");

	 	while(isNaN(sueldo))
	 	{
	 		sueldo=prompt(sueldo+" es inválido. Ingrese su sueldo a partir de $ 8000");
	 	}
	 }

	 	 while(legajo<1000 || legajo>9999)
	 {
	 	legajo=prompt("Ingrese su número de legajo");

	 	while(isNaN(legajo))
	 	{
	 		legajo=prompt(legajo+ " es inválido. Ingrese su número de legajo");
	 	}
	 }
	 
	 while(nacionalidad!='A'&&nacionalidad!='E'&&nacionalidad!='N')
	 {
	 	nacionalidad=prompt("Ingrese su nacionalidad: A (argentina), E (extranjera) o N (nacionalizada)").toUpperCase();

	 	while(!isNaN(nacionalidad))
	 	{
	 		nacionalidad=prompt(nacionalidad+" es inválido. Ingrese su nacionalidad");
	 	}

	 }

switch(sexo)
{
 	case'f':
 		sexo='Femenino';
 	break;
 	
 	case'm':
 		sexo='Masculino';
 	break;
}

switch(estadoCivil)
{
	case '1':
		estadoCivil='Soltero/a';
	break;
	case '2':
		estadoCivil='Casado/a';
	break;
	case '3':
		estadoCivil='Divorciado/a';
	break;
	case '4':
		estadoCivil='Viudo/a'
	break;
}

switch(nacionalidad)
{
	case 'A':
		nacionalidad='Argentina';
	break;
	case 'E':
		nacionalidad='Extranjera';
	break;
	case 'N':
		nacionalidad='Nacionalizado/a';
	break;
}

 
document.getElementById('Edad').value=edad+" años";
document.getElementById('Sexo').value=sexo;
document.getElementById('EstadoCivil').value=estadoCivil;
document.getElementById('Sueldo').value=sueldo+' brutos';
document.getElementById('Legajo').value="Nro de legajo: "+legajo;
document.getElementById('Nacionalidad').value=nacionalidad;

}
