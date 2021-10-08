// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  var first_Array = " "
  var secound_Array = " "
  for(var Firstindex=0; Firstindex<array1.length;Firstindex++){
    first_Array += array1[Firstindex]  
  }
  for(var Secound_Index=0; Secound_Index<array2.length; Secound_Index++){
    secound_Array += array2[Secound_Index]
  }
  return Number(first_Array) + Number(secound_Array)

}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  var value_array = String(value).split("")                              //transformando o valor dado em uma array de dígitos
  var count = 0;
  for(var i=0; i < value_array.length -i -1; i++){      
      if(value_array[i] == value_array[value_array.length -i -1]){      //utilizando um contador para determinar o número dos pares diametralmente opostos que são iguais
        count += 1        
      }   
 
}
  return (count == Math.floor(value_array.length/2) ? true: false) // usando o operador ternário para reduzir a notação do if #Se o número de pares 
                                                                   // forem iguais a metade do número de dígitos do número arredondado por baixo, retorne verdadeiro
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
// ------------------------// -----------------------------------
export function errorMessage(input) {  
   
if (!input){
  return 'Required field'
}else if(!Number(input)){
  return 'Must be a number besides 0';
}else{
  return '';
}
}
   
  


  
  
  // ------------------------- // --------------------------
  
 

  


