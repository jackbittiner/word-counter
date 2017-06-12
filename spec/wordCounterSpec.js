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

  describe('splitWordsToArray', function() {
    it('splits the text into an array of all the words', function() {
      wordCounter.splitWordsToArray();
      expect(wordCounter.arrayOfWords[0]).toEqual('Hello');
      expect(wordCounter.arrayOfWords.length).toEqual(6);
    });
  });
})
