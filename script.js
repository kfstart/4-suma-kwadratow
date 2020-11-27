function sumaKwadratow (tablicaLiczb) {
  
  let sumaKwadratowa = 0;
  
  for (let i=0; i<tablicaLiczb.length; i++) {
    sumaKwadratowa += Math.pow(tablicaLiczb[i], 2);
  }
  
  return sumaKwadratowa;
}

let wynikFunkcji = sumaKwadratow([0, 1, 2, 3, 4, 5]);

console.log(wynikFunkcji);