//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (dataReferencia) => {
   var dataEmMilissegundos = dataReferencia.getTime(); //Convertendo a data inicial fornecida desde 1970/01/01 em milisegundos 
   var  datafinal = dataEmMilissegundos + 1e12; //somando 1 gigasegundo
  
   return new Date(datafinal);  //transformando o num de milissegundos para um objeto Date
};

//var hoje = new Date();
//var fimAno = new Date(1995, 11, 31, 23, 59, 59, 999); // Seta dia e mês
//fimAno.setFullYear(hoje.getFullYear()); // Seta o ano para esse ano
//var msPorDia = 24 * 60 * 60 * 1000; // Quantidade de milisegundos por dia
//var diasRestantes = (fimAno.getTime() - hoje.getTime()) / msPorDia
//var diasRestantes = Math.round(diasRestantes); //retorna os dias restantes no ano
// 01/01/1970 getTime