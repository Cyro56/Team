//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (name) => {
  // retirando elementos especiais
  const retirandoSublinhado = name.replace(/[_+]/, "");
  const retirandoSublin2 = retirandoSublinhado.replace(/\w_/,"");
  const retirandoTraço = retirandoSublin2.replace(/[-]/, " ");
  const retirandoTraço2 = retirandoTraço.replace(/\w-/, "");
 
 
  // separando as palavras

  var palavras = retirandoTraço2.split(" ", name.length).filter(x => x);
  var acron = palavras[0][0].toUpperCase();
  console.log(palavras)

 
 
  

  //definindo as letras
 
  for(let i=1; i < palavras.length ; i++){
    acron += palavras[i][0].toUpperCase();
  }
  return acron;
};
  
//retirando variáveis desnecessárias



