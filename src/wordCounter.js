'use strict';

function WordCounter(text) {
  this.text = text;
}

WordCounter.prototype.removePunctuation = function() {
  this.text = this.text.replace(/-/g," ")
  this.text = this.text.replace(/[.,\/#!$"?%\^&\*;:{}=\-_`'~()]/g,"")
}

WordCounter.prototype.removeNumbers = function() {
  this.text = this.text.replace(/[0-9]/g, '');
}

WordCounter.prototype.makeAllWordsLowerCase = function() {
  this.text = this.text.toLowerCase();
}

WordCounter.prototype.splitWordsToArray = function() {
  this.text = this.text.replace( /\n/g, " " ).split(" ")
}

WordCounter.prototype.removeWhiteSpace = function() {
  this.text = this.text.filter(function(entry) { return entry.trim() != ''; });
}

WordCounter.prototype.sortAlphabetically = function() {
  this.text = this.text.sort();
}

WordCounter.prototype.countFrequencies = function() {
  var wordFrequencies = {}
  this.text.forEach(function(word) {
    if (wordFrequencies.hasOwnProperty(word)) {
      wordFrequencies[word]++;
    } else {
      wordFrequencies[word] = 1;
    }
  });
  this.wordFrequencies = wordFrequencies
}

WordCounter.prototype.organiseIntoPrimes = function() {
  var primeFrequency = [];
  var notPrimeFrequency = [];
  var wordFrequencies = this.wordFrequencies;
  Object.keys(this.wordFrequencies).forEach(function(word){
    if(isPrime(wordFrequencies[word])){
      primeFrequency.push(word + ': ' + wordFrequencies[word])
    }
    else {
      notPrimeFrequency.push(word + ': ' + wordFrequencies[word])
    }
  });
  this.primes = primeFrequency;
  this.notPrimes = notPrimeFrequency;
}

function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1;
}
