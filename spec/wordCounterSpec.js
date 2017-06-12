describe('WordCounter', function() {

  beforeEach(function() {
    testText = "Hello World! hello world. !hello! .WoRLD.";
    wordCounter = new WordCounter(testText)
  });

  describe('initialize', function() {
    it('has text on initialization', function() {
      expect(wordCounter.text).toEqual("Hello World! hello world. !hello! .WoRLD.");
    });
  });
})
