//key
var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

var message =
  "b': yqg ,:agr(hue:) shrerg jq,u'qf q !hg ,:psqñrf:g rg,fuwurae: s:f r' ,yq!x mbg:z 'q 'r,yrn !hfua( t'usqfuq ,:apu(:)m z q ,:a!uahq,u:a rajuq ha pragqir ,utfqe:n br' dhr !h dhurfqg)";
var message2 =
  "¡lo has conseguido! puedes vacilar a tus compañeros escribiendo por el chat: '¡soy la leche, turing fliparia conmigo!' y a continuacion envia un mensaje cifrado, ¡el que tu quieras!";

var searchCharIntoString = (char, string) => {
  for (var i = 0; i < string.length; i++) {
    if (string[i] === char) return i;
  }
  return -1;
};

var encryptOrDecrypt = (message, isEncrypted) => {
  var indexOfLetter;
  var messageDecrypted = "";
  var decryptedLetter = "";
  var startingAlphabet = isEncrypted ? encryptedAlphabet : plainAlphabet;
  var finishingAlphabet = isEncrypted ? plainAlphabet : encryptedAlphabet;

  for (var letter of message) {
    indexOfLetter = searchCharIntoString(letter, startingAlphabet);
    decryptedLetter =
      letter === " " || letter === "ñ"
        ? letter
        : finishingAlphabet[indexOfLetter];
    messageDecrypted = messageDecrypted + decryptedLetter;
  }

  return messageDecrypted;
};

var decrytedMessage = encryptOrDecrypt(message, true);
console.log(decrytedMessage);
console.log(message);
console.log(encryptOrDecrypt(decrytedMessage, false));
