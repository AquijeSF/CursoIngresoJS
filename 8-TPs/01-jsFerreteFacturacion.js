/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let preciouno;
    let preciodos;
    let preciotres;
    let sumatotal;

    preciouno = parseInt (document.getElementById("txtIdPrecioUno").value);

    preciodos = parseInt (document.getElementById("txtIdPrecioDos").value);

    preciotres = parseInt (document.getElementById("txtIdPrecioTres").value);

    sumatotal = preciouno + preciodos + preciotres

    alert ("La suma de todos los productos es: $" + sumatotal);

}
function Promedio () 
{
    let preciouno;
    let preciodos;
    let preciotres;
    let sumatotal;
    let promedio;

    preciouno = parseInt (document.getElementById("txtIdPrecioUno").value);

    preciodos = parseInt (document.getElementById("txtIdPrecioDos").value);

    preciotres = parseInt (document.getElementById("txtIdPrecioTres").value);

    sumatotal = preciouno + preciodos + preciotres
    
    promedio = sumatotal / 3

    alert ("El precio promedio de los productos calculados, es: $" + promedio);

}

function PrecioFinal () 
{
    let preciouno;
    let preciodos;
    let preciotres;
    let sumatotal;
    let IVA;

    preciouno = parseInt (document.getElementById("txtIdPrecioUno").value);

    preciodos = parseInt (document.getElementById("txtIdPrecioDos").value);

    preciotres = parseInt (document.getElementById("txtIdPrecioTres").value);

    sumatotal = preciouno + preciodos + preciotres
    
    IVA = sumatotal * 21 /100

    PrecioFinal = IVA + sumatotal

    alert ("El precio del producto (con IVA Incluido), es: $" + PrecioFinal);


}