

export class Triangle {
  sides;
  constructor(...sides) {
    this.sides = sides;
  }

  get isEquilateral() {
    var ladoA = this.sides[0];
    var ladoB = this.sides[1];
    var ladoC = this.sides[2];
    if(ladoA + ladoB < ladoC || ladoA + ladoC < ladoB || ladoB + ladoC < ladoA){
      return false;                                     // Condições de existência de um triângulo qualquer, a soma de quais quer dois lados deve ser maior que o terceiro, caso não seja atendida retornará false
    }
    if(ladoA == "" || ladoB == "" || ladoC == ""){
      return false;                                    //condição de existência de um triângulo não degenerado, onde nenhum dos lados  pode ser igual á zero
  }
    else{
      return ladoA === ladoB && ladoA === ladoC;      //Um triangulo equilatero deve ter todos os lados iguais entre si ao mesmo tempo. (usando a estrutura and)
}

   
 
  }
  
  get isIsosceles() {
    var ladoA = this.sides[0];
    var ladoB = this.sides[1];
    var ladoC = this.sides[2];
    if(ladoA + ladoB < ladoC || ladoA + ladoC < ladoB || ladoB + ladoC < ladoA){
      return false;                                    // Condições de existência de um triângulo qualquer, a soma de quais quer dois lados deve ser maior que o terceiro, caso não seja atendida retornará false
    }
    if(ladoA == "" || ladoB == "" || ladoC == ""){
      return false;                                   //condição de existência de um triângulo não degenerado, onde nenhum dos lados  pode ser igual á zero
 }
    else{
    return ladoA === ladoB || ladoA === ladoC || ladoC === ladoB;
}                                                     //um triângulo isóceles deve ter pelo menos dois lados iguais entre si. (usando a estrutura Or)
  }

  get isScalene() {
    var ladoA = this.sides[0];
    var ladoB = this.sides[1];
    var ladoC = this.sides[2];
    if(ladoA + ladoB < ladoC || ladoA + ladoC < ladoB || ladoB + ladoC < ladoA){
      return false;                                    // Condições de existência de um triângulo qualquer, a soma de quais quer dois lados deve ser maior que o terceiro, caso não seja atendida retornará false
    }
    if(ladoA == "" || ladoB == "" || ladoC == ""){
      return false;                                   //condição de existência de um triângulo não degenerado, onde nenhum dos lados  pode ser igual á zero
  }
    else{

    return !(ladoA === ladoB || ladoA === ladoC || ladoC === ladoB);    //Um triângulo escaleno não deve ter lados iguais entre si, para isso usamos o simbolo de negação !, para inverter a lógica do triângulo isóceles 
  }
  
}
  
  
};
