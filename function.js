function selectionSort(lista) {
    const n = lista.length;
  
    for (let i = 0; i < n - 1; i++) {
      let indiceMenor = i;
      for (let j = i + 1; j < n; j++) {
        if (lista[j] < lista[indiceMenor]) {
          indiceMenor = j;
        }
      }
      if (indiceMenor !== i) {
        let temp = lista[i];
        lista[i] = lista[indiceMenor];
        lista[indiceMenor] = temp;
      }
    }
  
    return lista;
  }
  

const numeros = [12, 5, 8, 1, 19, 3, 7, 14, 2, 10];

executar_estrategia(numeros, selectionSort)