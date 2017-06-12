'use strict';

function WordCounter(text) {
  this.text = text;
}

WordCounter.prototype.removePunctuation = function() {
  this.text = this.text.replace(/[.,\/#!$"?%\^&\*;:{}=\-_`'~()]/g,"")
}

WordCounter.prototype.removeNumbers = function() {
  this.text = this.text.replace(/[0-9]/g, '');
}

WordCounter.prototype.makeAllWordsLowerCase = function() {
  this.text = this.text.toLowerCase();
}

WordCounter.prototype.splitWordsToArray = function() {
  this.text = this.text.split(" ");
}
