const lista = [20, 30, 40, 50]


function calcularMediaArismetica(lista) {
    
    let sumaLista = 0;
    for(let i = 0; i < lista.length; i++) {
    sumaLista = sumaLista + lista[i];
}

  

const promedioLista = sumaLista / lista.length;
return promedioLista;
}






