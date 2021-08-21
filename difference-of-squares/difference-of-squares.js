//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  num;
  constructor(...num){         //os 3 pontos são o Spread operator, usado para receber diversos parâmetros
    this.num = num;
  }

  get sumOfSquares() {
    var numero = this.num[0];
    return Math.floor((numero/6)*(numero+1)*(2*numero+1));     //usando a solução ótima para a soma dos quadrados dos n primeiros termos
  }                                                           // Usando o Math.floor para a correção (arredondamento para o menor inteiro) de pequenas imprecisões de cálculo de divisão 

  get squareOfSum() {
    var numero = this.num[0];
    return ((numero**4+(2*numero**3)+(numero**2))/4);        //usando a solução ótima do quadrado da soma dos n primeiros termos
  }

  get difference() {
    var numero = this.num[0];
    return ((3*numero**4)+(2*numero**3)-(3*numero**2)-(2*numero))/12;   //usando a solução ótima para a diferença entre o quadrado da soma e a soma dos quadrados dos n primeiros termos
  }
};
