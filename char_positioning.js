var args = process.argv.slice(2);
var objectChar = {}

var countLetters = function(allLetters) {

  for (var i =0; i < allLetters.length; i++) {


   if (objectChar[allLetters[i]]) {
      objectChar[allLetters[i]].push(i);
    } else {
      objectChar[allLetters[i]] = [i];
    }

  }

return objectChar

}


console.log(countLetters(args.join('')));
