describe('TextEditor', function() {

  beforeEach(function() {
    testText = "Hello World! hello world. !hello! .WoRLD.";
    textEditor = new TextEditor(testText)
  });

  describe('initialize', function() {
    it('has text on initialization', function() {
      expect(textEditor.text).toEqual("Hello World! hello world. !hello! .WoRLD.");
    });
  });

  describe('splitWordsToArray', function() {
    it('splits the text into an array of all the words', function() {
      textEditor.splitWordsToArray();
      expect(textEditor.text[0]).toEqual('Hello');
      expect(textEditor.text.length).toEqual(6);
    });
  });

  describe('removePuncuation', function() {
    it('removes punctuation from the text', function() {
      textEditor.removePunctuation();
      expect(textEditor.text).toEqual("Hello World hello world hello WoRLD");
    });

    it('substitutes hyphens with spaces', function() {
      textEditor.text = "-jack-jack--jack-"
      textEditor.removePunctuation();
      expect(textEditor.text).toEqual(" jack jack  jack ");
    });
  });

  describe('makeAllWordsLowerCase', function() {
    it('makes all of the words in a string lowercase', function() {
      textEditor.makeAllWordsLowerCase();
      expect(textEditor.text).toEqual("hello world! hello world. !hello! .world.")
    });
  });

  describe('removeNumbers', function() {
    it('removes all numbers from a string', function() {
      textEditor.text = "I'm writing this text at 20mins to 11am in the year 2017";
      textEditor.removeNumbers();
      expect(textEditor.text).toEqual("I'm writing this text at mins to am in the year ");
    });
  });

  describe('removeWhiteSpace', function() {
    it('removes all blank entries in an array', function() {
      textEditor.text = ['', '', "leave this please", '', ''];
      textEditor.removeWhiteSpace()
      expect(textEditor.text).toEqual(["leave this please"])
    });
  });

  describe('sortAlphabetically', function() {
    it('lists an array in alphabetical order', function() {
      textEditor.text = ['c', 'b', 'a'];
      textEditor.sortAlphabetically();
      expect(textEditor.text).toEqual(['a', 'b', 'c'])
    });
  });
});
