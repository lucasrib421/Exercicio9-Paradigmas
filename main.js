function executar_estrategia(lista, estrategia) {
    if (typeof estrategia !== 'function') {
      throw new Error("O segundo parâmetro deve ser uma função.");
    }
    return estrategia(lista);
  }