// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Get the position (index) of the card in the given stack
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} position of the card in the stack
 */
export function getCardPosition(stack, card) {
  return stack.indexOf(card)
}

/**
 * Determine if the stack contains the card
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {boolean} true if card is in the stack, false otherwise
 */
export function doesStackIncludeCard(stack, card) {
  
  for(const cards of stack){  // essa solução é melhor :  return stack.includes(card);
    if(cards == card){
      return true
    }     
    else{
      return false
    }
  }
  

}

/**
 * Determine if each card is even
 *
 * @param {number[]} stack
 *
 * @returns {boolean} true if all cards are even, false otherwise
 */
export function isEachCardEven(stack) {
  let count = 0;
  for(let cards of stack){
    if(cards%2 ==0){
      count += 1
    }
  }
  if(count != stack.length){
    return false
  }
  else{
    return true
  }
  
}

/**
 * Check if stack contains odd-value card
 *
 * @param {number[]} stack
 *
 * @returns {boolean} true if the array contains odd card, false otherwise
 */
export function doesStackIncludeOddCard(stack) {
  let count = 0;
  for(let cards of stack){
    if(cards%2 !=0){
      count += 1      
    }
  }
  if(count > 0){
    
    return true
  }
  else{
    return false
  } 
}

/**
 * Get the first odd card from the stack
 *
 * @param {number[]} stack
 *
 * @returns {number} the first odd value
 */
export function getFirstOddCard(stack) {
  let list = []
  for(let cards of stack){
    if(cards%2 != 0){
      list += cards
      list = list.split("")
    }   
  }
  if(list.length == 0){
    return undefined
  }
  return Number(list[0])  
}

/**
 * Determine the position of the first card that is even
 *
 * @param {number[]} stack
 *
 * @returns {number} position of the first card that is even
 */
export function getFirstEvenCardPosition(stack) {
  let list = []                 
  for(let cards of stack){
    if(cards%2 == 0){
      list += cards
      list = list.split("")       //adicionando a lista, como string, os valores pares
    }   
  }
   return stack.indexOf(+list[0])  //retornando o indice do primeiro valor par contido em list q está contido em stack, pois o primeiro valor par de List, pela ordem
                                  //de computação também será o primeiro valor par de stack
  
}

