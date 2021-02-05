/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let sueldofinal;
	let descuento;

	importe = parseInt (document.getElementById("txtIdImporte").value);

	descuento = prompt("ingrese su porcentaje de descuento");

	descuento = 100 / importe * descuento;

	sueldofinal = importe - descuento;

	document.getElementById("txtIdResultado").value = sueldofinal;
}
