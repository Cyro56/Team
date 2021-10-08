// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch(name){
    case "Energizer":
      return 1.5;
      break;
      
    case 'Pure Strawberry Joy':
      return 0.5;
      break;

    case 'Green Garden':
      return 1.5;
      break;

    case 'Tropical Island':
      return 3;
      break;

    case 'All or Nothing':
      return 5;
      break;
    
    default:
      return 2.5;
       
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  var somas = []
  var a = 0
  
  for(var i = 0; i < limes.length ; i++){
    if(limes[i] === "small"){
      a += 6
    }
    else if(limes[i] === "large"){
      a += 10
    }
    else if(limes[i] === "medium"){
      a += 8
    }
    if(wedgesNeeded < 1){
      break
    }
    else if(a >= wedgesNeeded + 10){
      break
    }
    somas[i] = a
      
  }
  
 
  
 var operacoes = somas.length
  return (operacoes)
    
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */

export function remainingOrders(timeLeft, orders) {
  var sucos = {
    "Energizer": 1.5,
    'Pure Strawberry Joy': 0.5,
    'Green Garden': 1.5,
    'Tropical Island': 3,
    'All or Nothing': 5,
    'Limetime': 2.5,
    'Manic Organic': 2.5,
    'Papaya & Peach': 2.5,
    "Vitality": 2.5,
    "Ruby Glow": 2.5
  };
   var time = 0;
   const b = orders.length
  for(var i = 0; i < b ; i++){
   if(time < timeLeft ){
    
     time += sucos[orders[0]]
     orders.splice(0,1)
     
      
   }
  }
 
  

 return orders
 
}
