var textEditor = require('./textEditor')
var primeCalculator = require('./primeCalculator')
var wordCounter = require('./wordCounter')

var text = "./text-file/railway-children.txt"
var fs = require('fs');
var bookText = fs.readFileSync(text, "utf8");

var te = new textEditor.TextEditor(bookText)
te.removePunctuation();
te.removeNumbers();
te.makeAllWordsLowerCase();
te.splitWordsToArray();
te.removeWhiteSpace();
te.sortAlphabetically();

var wc = new wordCounter.WordCounter(te.text)
wc.countFrequencies();

var pc = new primeCalculator.PrimeCalculator(wc.wordFrequencies)
pc.organiseIntoPrimes();

console.log("These are all the words:")
console.log(wc.wordFrequencies)
console.log("These are the ones that appear a prime number of times:")
console.log(pc.primes)
