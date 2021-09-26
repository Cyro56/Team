// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let cardsOfType = []
  stack.forEach((cards,index) => {if(cards == card){cardsOfType += card}})
  return cardsOfType.length  
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let list = 0;
  for(const number of stack){
    if(type == true && number%2 == 0){      
        list += 1;
      }
    
    else if(type == false && number%2 != 0){      
        list += 1;
      }
    }
   
  return list 
}
