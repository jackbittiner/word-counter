describe('PrimeCalculator', function() {

  beforeEach(function() {
    testTally = {'a': 1, 'b': 2, 'c': 3, 'd':4};
    primeCalculator = new PrimeCalculator(testTally)
  });

  describe('organiseIntoPrimes', function() {
    it('creates two arrays and pushes the primes into one and the nonprimes into another', function() {
      primeCalculator.organiseIntoPrimes();
      expect(primeCalculator.primes).toEqual(['b: 2', 'c: 3']);
    });
  });
});
