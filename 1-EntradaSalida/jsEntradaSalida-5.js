/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/

function mostrar()
{	
	var suNombre;
	var suEdad;
	suNombre = document.getElementById('elNombre').value;
	suEdad = document.getElementById('laEdad').value;
	alert("Usted se llama " +suNombre+ " y tiene " + suEdad + " años.");
	
}

	//alert(suNombre+suEdad);

	//var suNombre
	//suNombre = document.getElementById('elNombre').value;
	//alert(suNombre);


