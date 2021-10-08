type dnaBase = keyof typeof dnaBasis;

export function toRna(dna: string): string  {

  let result = '';

  for(const elemento of dna){
    if(!(elemento in dnaBasis)){
      throw new Error ('Invalid input DNA.');
    }
    result +=  dnaBasis[<dnaBase>elemento];
  } 
  return result;

}
 
enum dnaBasis {
  G = 'C',
  C = 'G',
  T = 'A',
  A = 'U',
}

