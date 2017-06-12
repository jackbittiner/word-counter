'use strict';

function WordCounter(text) {
  this.text = text;
}

WordCounter.prototype.removePunctuation = function() {
  this.text = this.text.replace(/[.,\/#!$"%\^&\*;:{}=\-_`~()]/g,"")
}

WordCounter.prototype.splitWordsToArray = function() {
  this.arrayOfWords = this.text.split(" ");
}
