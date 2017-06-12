'use strict';

function WordCounter(arrayOfWords) {
  this.arrayOfWords = arrayOfWords;
}

WordCounter.prototype.countFrequencies = function() {
  var wordFrequencies = {}
  this.arrayOfWords.forEach(function(word) {
    if (wordFrequencies.hasOwnProperty(word)) {
      wordFrequencies[word]++;
    } else {
      wordFrequencies[word] = 1;
    }
  });
  this.wordFrequencies = wordFrequencies
}
