'use strict';

function TextEditor(text) {
  this.text = text
}

TextEditor.prototype.removePunctuation = function() {
  this.text = this.text.replace(/-/g," ")
  this.text = this.text.replace(/[.,\/#!$"?%\^&\*;:{}=\-_`'~()]/g,"")
}

TextEditor.prototype.removeNumbers = function() {
  this.text = this.text.replace(/[0-9]/g, '');
}

TextEditor.prototype.makeAllWordsLowerCase = function() {
  this.text = this.text.toLowerCase();
}

TextEditor.prototype.splitWordsToArray = function() {
  this.text = this.text.replace( /\n/g, " " ).split(" ")
}

TextEditor.prototype.removeWhiteSpace = function() {
  this.text = this.text.filter(function(entry) { return entry.trim() != ''; });
}

TextEditor.prototype.sortAlphabetically = function() {
  this.text = this.text.sort();
}
