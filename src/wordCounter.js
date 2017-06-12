'use strict';

function WordCounter(text) {
  this.text = text;
}

WordCounter.prototype.splitWordsToArray = function() {
  this.arrayOfWords = this.text.split(" ");
}
