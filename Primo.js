function ehPrimo(numero) {
  if (numero < 2) return false;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) return false;
  }
  return true;
}

function filtrarPrimos(lista) {
  const primos = lista.filter(ehPrimo);
  console.log("Números primos encontrados:", primos);
  return primos;
}

const lista100 = Array.from({ length: 100 }, () => Math.floor(Math.random() * 200) + 1);

executar_estrategia(lista100, filtrarPrimos);
