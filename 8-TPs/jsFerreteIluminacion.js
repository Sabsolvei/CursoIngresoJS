/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

function CalcularPrecio () 

{
	var precioBruto;
	var precioNeto;
	var descuento; 
	var marca = document.getElementById('Marca').value;
	var cantidad = document.getElementById('Cantidad').value;
//hola
	
	switch(marca)
	{
		case "ArgentinaLuz":

			if (cantidad==3)
			{
				descuento=0.85;
			}
			else
				{
					if(cantidad==4)
					{
						descuento=0.75;
					}
					else
					{
						if(cantidad==5)
						{
							descuento=0.6;
						}
						else
						{
							if(cantidad>=6)
							{
								descuento=0.5;
							}
						}
					}
				}
			
		break;

		case "FelipeLamparas":
			if(cantidad==3)
			{
				descuento=0.9;
			}
			else
			{
				if(cantidad==4)
				{
					descuento=0.75;
				}
				else
				{
					if(cantidad==5)
					{
						descuento=0.7;
					}
					else
					{
						if(cantidad>=6)
						{
							descuento=0.5;
						}
					}
				}
			}
		break;

		default:
			if(cantidad==3)
			{
				descuento=0.95;
			}
			else
			{
				if(cantidad==4)
				{
					descuento=0.8;
				}
				else
				{
					if(cantidad==5)
					{
						descuento=0.7;
					}
					else
					{
						if(cantidad>=6)
						{
							descuento=0.5;
						}
					}
				}
			}
		break;


	}//switch (marca)

precioBruto = 35 * cantidad;
precioNeto = precioBruto * descuento;
document.getElementById('precioDescuento').value= precioNeto;

}//function CalcularPrecio () 


/*


				







{
	var cantLamparas;
	var marca;
	var precio = 35;
	var precioDesc;

	cantLamparas = document.getElementById('Cantidad').value;
	marca = document.getElementById('Marca').value;
	
	
	if (cantLamparas>=6) //6 lamparas
	{
		precioDesc=("$ "+(precio*0.5*cantLamparas));
		document.getElementById('precioDescuento').value = precioDesc;
	}
	else
	{
		if (cantLamparas==5) //5 lamparas
		{
			if(marca=='ArgentinaLuz')
			{
				precioDesc=("$ "+((precio-(precio*40)/100)*cantLamparas));
				document.getElementById('precioDescuento').value = precioDesc;
			}
			else
			{
				precioDesc=("$ "+((precio-(precio*30)/100)*cantLamparas));
				document.getElementById('precioDescuento').value = precioDesc;
			}
		}
		else	
		{
			if(cantLamparas==4) //4 lamparas
			{
				if(marca=='ArgentinaLuz' || marca=='FelipeLamparas')
				{
					precioDesc=("$ "+((precio-(precio*25)/100)*cantLamparas));
					document.getElementById('precioDescuento').value = precioDesc;
				}
				else
				{
					precioDesc=("$ "+((precio-(precio*20)/100)*cantLamparas));
					document.getElementById('precioDescuento').value = precioDesc;
				}

			}
		}

	}
 	
}*/
