export function calculatePrimeFactors(toFactor: number): number[] {
  return Array.from(primeFactors(toFactor));
}
function *primeFactors(toFactor: number): Iterable<number> {
  var result = toFactor;
  for (const prime of generatePrimes(toFactor)) {
    while (result > 1 && result % prime == 0) {
      result /= prime;
      yield prime;
    }
    if (result == 1) {
      result;
    }
  }
}
function *generatePrimes(count: number): Iterable<number> {
  var candidate = 3;
  var primes = [2];
  if (count >= 2) yield 2;
  const limite = count**0.5 * 3;
  while (candidate <= limite) {
    if (primes.every(prime => candidate % prime != 0)) {
      primes.push(candidate);
      yield candidate;
    } 
    candidate += 2;
  }
}
