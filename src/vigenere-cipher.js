const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }
  encrypt(word, keyword) {
    let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
    let encryptWord = "";
    word = word.toLowerCase();
    for (let i = 0; i < word.length / keyword.length; i++) {
      keyword += keyword;
    }
    let str = "";
    let n = 0
    for (let i = 0; i < word.length; i++) {
      if (word[i] == ' ') {
        str += ' ';
        n--;
      } else {
        str += keyword[i+n];
      }
    }
    str = str.toLowerCase();
    for (let i = 0;i < word.length;i++) {
      if (alphabet.indexOf(word[i]) < 0) {
        encryptWord += word[i];
        continue;
      }
      if (word.charAt(i) == ' ') {
        encryptWord += ' ';
      } else {
        encryptWord += alphabet.charAt((alphabet.indexOf(word.charAt(i)) + alphabet.indexOf(str.charAt(i))) % alphabet.length);
      }
      encryptWord = encryptWord.toUpperCase();
    }
  
    if (!this.mode) {
      encryptWord = encryptWord.split('').reverse().join('');
      return encryptWord;
    }
    return encryptWord;
    
  }       
  decrypt(word, keyword) {
    let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
    let encryptWord = "";
    word = word.toUpperCase();
    for (let i = 0; i < word.length / keyword.length; i++) {
      keyword += keyword;
    }
    keyword += keyword;
    let str = "";
    let n = 0
    for (let i = 0; i < word.length; i++) {
      if (word[i] == ' ') {
        str += ' ';
        n--;
      } else {
        str += keyword[i+n];
      }
    }
    str = str.toLowerCase();
    for (let i = 0;i < word.length;i++) {
      if (alphabet.indexOf(word[i]) < 0) {
        encryptWord += word[i];
        continue;
      }
      if (word.charAt(i) == ' ') {
        encryptWord += ' ';
      } else {
        encryptWord += alphabet.charAt(((alphabet.indexOf(word.charAt(i)) + alphabet.length) - alphabet.indexOf(str.charAt(i))) % alphabet.length);
      }
      encryptWord = encryptWord.toUpperCase();
    }
    if (!this.mode) {
      encryptWord = encryptWord.split('').reverse().join('');
      return encryptWord;
    }
    return encryptWord;
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;
