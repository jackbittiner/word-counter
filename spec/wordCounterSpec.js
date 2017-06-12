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
      wordCounter.makeAllWordsLowerCase();
      expect(wordCounter.text).toEqual("hello world! hello world. !hello! .world.")
    });
  });

  describe('removeNumbers', function() {
    it('removes all numbers from a string', function() {
      wordCounter.text = "I'm writing this text at 20mins to 11am in the year 2017";
      wordCounter.removeNumbers();
      expect(wordCounter.text).toEqual("I'm writing this text at mins to am in the year ");
    });
  });

  describe('removeWhiteSpace', function() {
    it('removes all blank entries in an array', function() {
      wordCounter.text = ['', '', "leave this please", '', ''];
      wordCounter.removeWhiteSpace()
      expect(wordCounter.text).toEqual(["leave this please"])
    });
  });

  describe('sortAlphabetically', function() {
    it('lists an array in alphabetical order', function() {
      wordCounter.text = ['c', 'b', 'a'];
      wordCounter.sortAlphabetically();
      expect(wordCounter.text).toEqual(['a', 'b', 'c'])
    })
  })
})
