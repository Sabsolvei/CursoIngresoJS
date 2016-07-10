/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroDivisor;
	var numeroDividendo;

	numeroDividendo = document.getElementById('numeroDividendo').value;
	numeroDivisor = document.getElementById('numeroDivisor').value;

	var resultado;

	resultado = numeroDividendo%numeroDivisor;

	alert("El resto es: " +resultado);

}
