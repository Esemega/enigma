//key
var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

var message =
  "b': yqg ,:agr(hue:) shrerg jq,u'qf q !hg ,:psqñrf:g rg,fuwurae: s:f r' ,yq!x mbg:z 'q 'r,yrn !hfua( t'usqfuq ,:apu(:)m z q ,:a!uahq,u:a rajuq ha pragqir ,utfqe:n br' dhr !h dhurfqg)";
var message2 =
  "¡lo has conseguido! puedes vacilar a tus compañeros escribiendo por el chat: '¡soy la leche, turing fliparia conmigo!' y a continuacion envia un mensaje cifrado, ¡el que tu quieras!";

// var searchCharIntoString = (char, string) => {
//   for (var i = 0; i < string.length; i++) {
//     if (string[i] === char) return i;
//   }
//   return -1;
// };

var getTranslation = (message, startingAlphabet, finishingAlphabet ) => {
  var indexOfLetter;
  var translatedLetter = "";
  var translatedMessage = "";

  for (var letter of message) {
    // indexOfLetter = searchCharIntoString(letter, startingAlphabet);
    //Optional part -> Using indexOf 
    indexOfLetter = startingAlphabet.indexOf(letter);
    translatedLetter =
      letter === " " || letter === "ñ" ? letter : finishingAlphabet[indexOfLetter];
    translatedMessage = translatedMessage + translatedLetter;
  }

  return translatedMessage;
};

var decrytedMessage = getTranslation(message, encryptedAlphabet, plainAlphabet);
console.log(decrytedMessage);
console.log(message);
console.log(getTranslation(decrytedMessage, plainAlphabet, encryptedAlphabet));
