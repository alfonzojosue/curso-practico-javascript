const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(a,b){
        return a - b;
    }
);

function esPar(numero){
    (numero % 2 === 0)
    
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
 );
 const promedioLista = sumaLista / lista.length;
 return promedioLista;
}


function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){

        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad]; 

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    }else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

const medianaGeneralCol = medianaSalarios(salariosColSorted);


//Mediana del Top 10 Salarios


const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;
const salarios10Col = salariosColSorted.splice(spliceStart, spliceCount);


const medianaGeneralTopCol = medianaSalarios(salarios10Col);


console.log(
    medianaGeneralCol,
    medianaGeneralTopCol
);
