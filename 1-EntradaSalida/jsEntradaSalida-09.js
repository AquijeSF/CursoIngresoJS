/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
Osea si cargo 100 muestro 110 */
function mostrarAumento()
{
	
	let sueldo;
	let sueldofinal;
	let aumento;

	sueldo = parseInt (document.getElementById("txtIdSueldo").value);

	aumento = prompt("Ingrese el porcentaje de aumento");

	aumento = 100 / sueldo * aumento;

	sueldofinal = sueldo + aumento;

	document.getElementById("txtIdResultado").value = sueldofinal;
}