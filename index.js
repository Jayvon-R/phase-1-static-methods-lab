class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  static titleize(string) {
    const excludedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = string.split(' ');
    
    const titleizedWords = words.map((word, index) => {
      if (index === 0 || !excludedWords.includes(word)) {
        return this.capitalize(word);
      } else {
        return word;
      }
    });
    
    return titleizedWords.join(' ');
  }
}

console.log(Formatter.capitalize("hello")); 
console.log(Formatter.sanitize("hello!@#world")); 
console.log(Formatter.titleize("the quick brown fox")); 
