var args = process.argv.slice(2);
var objectChar = {}

var countLetters = function(allLetters) {

  for (var i =0; i < allLetters.length; i++) {

    // allLetters = allLetters.replace(/\s/g, '');

   if (objectChar[allLetters[i]]) {
      objectChar[allLetters[i]] += 1
    } else {
      objectChar[allLetters[i]] = 1
    }
  }

return objectChar

}


console.log(countLetters(args.join('')));
