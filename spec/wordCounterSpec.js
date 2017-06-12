describe('WordCounter', function() {

  beforeEach(function() {
    testText = ['a', 'a', 'b', 'c', 'c', 'c'];
    wordCounter = new WordCounter(testText)
  });

  describe('countFrequencies', function() {
    it('returns a hash of words and the number of times they appear', function() {
      wordCounter.countFrequencies();
      expect(wordCounter.wordFrequencies).toEqual({'a': 2, 'b': 1, 'c': 3})
    });
  });
})
