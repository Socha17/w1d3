var args = process.argv.slice(2);
var objectChar = {}

var countLetters = function(allLetters) {

  for (var i =0; i < allLetters.length; i++) {


      // if letter exists or is multiple add 1 to lettercount
   if (objectChar[allLetters[i]]) {
      objectChar[allLetters[i]] += 1
    } else {
      // if letter only occurs once = lettercount to 1
      objectChar[allLetters[i]] = 1
    }
  }

return objectChar

}


console.log(countLetters(args.join('')));
