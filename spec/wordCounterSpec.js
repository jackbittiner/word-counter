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
      expect(wordCounter.text[0]).toEqual('Hello');
      expect(wordCounter.text.length).toEqual(6);
    });
  });

  describe('removePuncuation', function() {
    it('removes punctuation from the text', function() {
      wordCounter.removePunctuation();
      expect(wordCounter.text).toEqual("Hello World hello world hello WoRLD");
    });
  });

  describe('makeAllWordsLowerCase', function() {
    it('makes all of the words in a string lowercase', function() {
      wordCounter.removePunctuation();
      wordCounter.makeAllWordsLowerCase();
      expect(wordCounter.text).toEqual("hello world hello world hello world")
    })
  })
})
