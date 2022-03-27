//const precioOriginal = 150;
//const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * (porcentajePrecioConDescuento)) / 100;

    return precioConDescuento;
}


function onClickButtonPrice() {
    const inputPrice = document.getElementById("InputPrecio");
    const priceValue = Number(inputPrice.value);
    const inputDiscount = document.getElementById("InputDescuento");
    const discountValue = Number(inputDiscount.value);

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("resultado");
    resultP.innerText = "El precio con descuento es " + precioConDescuento + "$";
}





/*console.log("El precio original es " + precioOriginal + "$");

console.log("Hay un descuento de: " + descuento + "%");

console.log("El precio con el descuento es de: " + precioConDescuento + "$");

console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
})*/