function PrimeCalculator(wordTally) {
  this.wordTally = wordTally;
  this.primes = [];
}

PrimeCalculator.prototype.organiseIntoPrimes = function() {
  var primeFrequency = [];
  var wordTally = this.wordTally
  Object.keys(wordTally).forEach(function(word){
    if(isPrime(wordTally[word])){
      primeFrequency.push(word + ': ' + wordTally[word])
    }
  });
  this.primes = primeFrequency;
}

function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1;
}

module.exports.PrimeCalculator = PrimeCalculator;
