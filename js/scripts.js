var pigLatin = function(word) {
  //vowels = ["a", "e", "i", "o", "u"]

  var first_letter = word.charAt(0);

  if (first_letter === ("a" || "e" || "i" || "o" || "u")) {
    word = word.concat("ay");
    return word;
  } else if (first_letter !== ("a" || "e" || "i" || "o" || "u")) {
    var letter = word.slice(0, 1);
    var new_word = word.substr(1).concat(letter).concat("ay");
    return new_word;
  }

};




  //   new_word = word.split()
  //   new_string = new_word.push("ay").join("")
  // }
  // return new_string;
// };
