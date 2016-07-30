function Mostrar()
{
//for(inicio(contrador=0);condicion(contador<10);fin(contador++))
var contador=0;
var contador1=0;
var contador2=0;
var contador3=0;
var contador4=0;
var contador5=0;
var contador6=0;
var contador7=0;
var contador8=0;
var contador9=0;
var contador10=0;
var limite=100000;

	for (; ;) 
	{
	
		//console.log(contador);
		contador++;
		if(contador==limite)
		{
			break;
		}

		var random = Math.floor((Math.random()*10)+1);

		while (random==5 && contador5 > limite*0.05)
		{
			random = Math.floor((Math.random()*10)+1);
		}
		
		switch(random)
		{
			case 1: 
				contador1++;
			break;
			case 2: 
				contador2++;
			break;
			case 3: 
				contador3++;
			break;
			case 4: 
				contador4++;
			break;
			case 5: 
				contador5++;
			break;
			case 6: 
				contador6++;
			break;
			case 7: 
				contador7++;
			break;
			case 8: 
				contador8++;
			break;
			case 9: 
				contador9++;
			break;
			case 10: 
				contador10++;
			break;
		}

	}//fin del for

		console.log('numero 1: '+Math.floor(contador1*100/limite)+' %');
		console.log('numero 2: '+Math.floor(contador2*100/limite)+' %');
		console.log('numero 3: '+Math.floor(contador3*100/limite)+' %');
		console.log('numero 4: '+Math.floor(contador4*100/limite)+' %');
		console.log('numero 5: '+Math.floor(contador5*100/limite)+' %');
		console.log('numero 6: '+Math.floor(contador6*100/limite)+' %');
		console.log('numero 7: '+Math.floor(contador7*100/limite)+' %');
		console.log('numero 8: '+Math.floor(contador8*100/limite)+' %');
		console.log('numero 9: '+Math.floor(contador9*100/limite)+' %');
		console.log('numero 10: '+Math.floor(contador10*100/limite)+' %');
}