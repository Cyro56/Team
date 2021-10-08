export class DiffieHellman {
  private readonly g: number;
  private readonly p: number;
  constructor(p:number, g:number) {
    const primos = Array.from(this.generatePrimes(Math.max(p,g)))
    if(!primos.includes(p) || !primos.includes(g)){
      throw new Error();
    }
    this.g = g;
    this.p = p;
  }

  private *generatePrimes(limite:number):Iterable<number>{
    var candidato = 3;
    
    var primes = [2];
    if(limite >= 2){
      yield 2
    }
    
    while(candidato <= limite){
     if(primes.filter(valor => valor < limite**0.5).every(valor => candidato%valor != 0)){
       primes.push(candidato);
       yield candidato;
     }
     candidato+= 2;
    }    
  }

  public getPublicKey(privateKey:number):number {
    if(privateKey <= 1 || privateKey >= this.p){
      throw new Error("número inválido");      
    }
    return (this.g**privateKey)%this.p
  }

  public getSecret(theirPublicKey:number, myPrivateKey:number):number {
    return (theirPublicKey**myPrivateKey)%this.p
  }
}