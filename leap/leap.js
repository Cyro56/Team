//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

//export const isLeap = (Anoreferencia) => {
  //return( Anoreferencia%100 !== 0 && Anoreferencia%4 == 0) || (Anoreferencia%400 == 0)  opção de resolução

  export const isLeap = (Anoreferencia) => {     // Criação de refência
    if( ( Anoreferencia%100 !== 0 && Anoreferencia%4 == 0) || (Anoreferencia%400 == 0)){ // Se o ano não for divisivel por 100 e (for divisível por 4 ou divisível por 400)
      return true;                                                                       // retorne verdadeiro
    }
    else {                            //caso contrário retorne falso
      return false
    }
  };


