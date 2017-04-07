var args = process.argv.slice(2);
var objectChar = {}

var countLetters = function(allLetters) {

  for (var i =0; i < allLetters.length; i++) {

      // if letter exists push index ALSO THE POSISTION into the array
   if (objectChar[allLetters[i]]) {
      objectChar[allLetters[i]].push(i);
    } else {
      //if letter not has not been entered yet set and print index of new letter
      objectChar[allLetters[i]] = [i];
    }

  }

return objectChar

}


console.log(countLetters(args.join('')));
