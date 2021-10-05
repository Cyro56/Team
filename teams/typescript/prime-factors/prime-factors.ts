function *generatePrimes(limite:number):Iterable<number>{
  var candidato = 3;
  
  var primes = [2];
  if(limite >= 2){
    yield 2
  }
  
  const count = limite**0.5*3;

  while(candidato <= limite){
   if(primes.every(valor => candidato%valor != 0)){
     primes.push(candidato);
     yield candidato;
   }
   candidato += 2;
  }    
}
function *generateFactors(numero:number):Iterable<number>{
  let resultado = numero;

 
  for(let primo of generatePrimes(numero)){
    while(resultado >1 && resultado%primo == 0){
      resultado = resultado/primo;
      yield primo;
    }
  }
}

export function calculatePrimeFactors(numero:number):number[] {
  return [...generateFactors(numero)];
 }
