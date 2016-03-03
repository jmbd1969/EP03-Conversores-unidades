/*****************************************************************************************/
function CalcularC()
{
	var C = document.getElementById("Centigrados").value;
	var F = ( (9*C)/5 )+32;
	var K = Number(C) + 273.15;
	document.getElementById("Resultado").innerHTML = C + "°C  son  "+ F +"°F<br>";
	document.getElementById("Resultado").innerHTML += C + "°C  son  "+ K +"°K";
}

function CalcularF()
{
	var F = document.getElementById("Fahrenheit").value;
	C = (F - 32) / (9/5);
	document.getElementById("ResultadoF").innerHTML = F + "°F  son  "+ C +"°C";
}

function CalcularK()
{
	var K = document.getElementById("Kelvin").value;
	C = Number(K) - 273.15;
	document.getElementById("ResultadoK").innerHTML = K + "°K  son  "+ C +"°C";
}

/*****************************************************************************************/

function CalcularGalones()
{
	var Galones = document.getElementById("Galones").value;
	var Litros = Galones * 3.7854;
	document.getElementById("Resultado").innerHTML = Galones + " Galones son "+ Litros +" Litros";
}

/*********************************************************************************************/

function CalcularPeso()
	{
		var Tierra = document.getElementById("Tierra").value;
		var Luna = Tierra * 0.17; //el peso en la luna es 17% menor
		document.getElementById("Resultado").innerHTML = "un peso de:" + Tierra + " en la tierra equivale a un peso de "+ Luna +" en la luna";
	}