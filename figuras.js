// Código del cuadrado

console.group("Cuadrado");

//const ladoCuadrado = 5;
//console.log ("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

perimetroCuadrado()

//console.log ("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;

}

areaCuadrado()


//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log ("El área del cuadrado es: " + areaCuadrado + "cm²");

console.groupEnd();

// Código del triángulo

console.group("Triángulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


/*console.log (
    "Los lados del triángulo miden: "
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo 
    + "cm"
    );

    const alturaTriangulo = 5.5;
    console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");*/


    function perimetroTriangulo(lado1, lado2, base) {
        return lado1 + lado2 + base;
    }

    function areaTriangulo(base, altura){
        return (base * altura) / 2;
    }


    //const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
    //console.log ("El perímetro del triángulo es: " + perimetroTriangulo + "cm")

    //const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
    //console.log("El area del triangulo es: " + areaTriangulo + "cm²")
console.groupEnd();

// Código del círculo

console.group("Círculos");

/*const radioCirculo = 4;

console.log("El radio del circulo es de: " + radioCirculo + "cm");

const diametroCirculo = radioCirculo * 2;

console.log("El diametro del circulo es de: " + diametroCirculo + "cm");

const PI = Math.PI;

const perimetroCirculo = diametroCirculo * PI;

console.log("El perimetro del circulo es de: " + perimetroCirculo + "cm");

const areaCirculo = PI * (radioCirculo * radioCirculo);

console.log ("El area del circulo es de:" + areaCirculo + "cm²");*/


function diametroCirculo(radio){
    return radio * 2;
}

const PI = Math.PI

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();