//key
var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

// var searchCharIntoString = (char, string) => {
//   for (var i = 0; i < string.length; i++) {
//     if (string[i] === char) return i;
//   }
//   return -1;
// };

var getTranslation = (message, startingAlphabet, finishingAlphabet ) => {
  var lowerCaseMessage = message.toLowerCase();
  var indexOfLetter;
  var translatedLetter = "";
  var translatedMessage = "";

  for (var letter of lowerCaseMessage) {
    // indexOfLetter = searchCharIntoString(letter, startingAlphabet);
    //Optional part -> Using indexOf 
    indexOfLetter = startingAlphabet.indexOf(letter);
    translatedLetter =
      letter === " " || letter === "ñ" ? letter : finishingAlphabet[indexOfLetter];
    translatedMessage = translatedMessage + translatedLetter;
  }

  return translatedMessage;
};

var buttonClickListener = (event) => {
    var messageToEncryptTextarea = document.getElementById("message-to-encrypt");
    var messageToDecryptTextarea = document.getElementById("message-to-decrypt");
    var messageToEncrypt = messageToEncryptTextarea.value;
    var messageToDecrypt = messageToDecryptTextarea.value;

    if (event.target.id === "encrypt-button") {
        
        var messageEncrypted = getTranslation(messageToEncrypt, plainAlphabet, encryptedAlphabet);

        messageToDecryptTextarea.value = messageEncrypted;
    } else {
        var messageDecrypted = getTranslation(messageToDecrypt, encryptedAlphabet, plainAlphabet);

        messageToEncryptTextarea.value = messageDecrypted;
    }


}


var encryptButton= document.getElementById("encrypt-button");
var decryptButton= document.getElementById("decrypt-button");

encryptButton.addEventListener('click', buttonClickListener);
decryptButton.addEventListener('click', buttonClickListener);
