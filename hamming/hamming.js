//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const compute = (...dna) => {
  let hamming = 0;
  
  
  if((dna[0] === "") && (dna[0] !== dna[1]) ) throw new Error('left strand must not be empty');
  else if((dna[1] === "") && (dna[1] !== dna[0]) ) throw new Error('right strand must not be empty');
  else if((dna[0].length) !== (dna[1].length)) throw new Error('left and right strands must be of equal length');
  
 
  else if(dna[0] === dna[1] ){
    return 0;
  }
  else{
    
  for(let index = 0; index < dna[0].length; index++){
    if(dna[0][index] !== dna[1][index]){
      hamming++
    }
  
  }
   return hamming
}
 };
