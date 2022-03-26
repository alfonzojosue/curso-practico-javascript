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

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;


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


// Funciones del cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perimetro de tu cuadrado es: " + perimetro + " cm");
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El area de tu cuadrado es: " + area + " cm²");
}


//Funciones del triangulo

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputLado1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("InputLado2");
    const value2 = Number(input2.value);

    const input3 =document.getElementById("InputBase");
    const value3 = Number(input3.value)

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert("El perimetro de tu triangulo es: " + perimetro + " cm");
}


function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputBase2");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("InputAltura");
    const value2 = Number(input2.value);

    const area = areaTriangulo(value1, value2);
    alert("El area de tu triangulo es: " + area + " cm²");
    }



    // Funciones del circulo

    function calcularPerimetroCirculo() {
        const input = document.getElementById("InputCirculo");
        const value = input.value

        const perimetro = perimetroCirculo(value);
        alert("El perimetro de tu circulo es de: " + perimetro + "cm");

    }

    function calcularAreaCirculo(){
        const input = document.getElementById("InputCirculo");
        const value = input.value;

        const area = areaCirculo(value);
        alert ("El area de tu circulo es de: " + area + "cm²");
    }
