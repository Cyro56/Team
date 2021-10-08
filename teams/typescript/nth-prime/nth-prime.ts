
function *generatePrimes(limite:number):Iterable<number>{
  var candidato = 3;
  
  var primes = [2];
  if(limite >= 1){
    yield 2
  }
  
  
  while(primes.length < limite){
   if(primes.every(valor => candidato%valor != 0)){
     primes.push(candidato);
     yield candidato;
   }
   candidato+= 2;
  }    
}


export function nth(numero: number):number {

  
const primo = Array.from(generatePrimes(numero)).pop();


if(!primo){
  throw new Error('Prime is not possible');
}
else{
  return primo;
}

};
