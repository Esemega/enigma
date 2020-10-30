//key
var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

//Commenting because >> Optional part -> Using indexOf 
// var searchCharIntoString = (char, string) => {
//   for (var i = 0; i < string.length; i++) {
//     if (string[i] === char) return i;
//   }
//   return -1;
// };

var getTranslation = (message, startingAlphabet, finishingAlphabet ) => {
  //Initalizing variables
  var indexOfLetter;
  var translatedLetter = "";
  var translatedMessage = "";
  //lower case transformation as my alphabets are in lower case
  var lowerCaseMessage = message.toLowerCase();

  //Each letter is translated
  for (var letter of lowerCaseMessage) {
    // indexOfLetter = searchCharIntoString(letter, startingAlphabet);
    //Optional part -> Using indexOf 
    //get the index of the letter in the starting alphabet
    indexOfLetter = startingAlphabet.indexOf(letter);
    //get the translated letter in the finishing alphabet, but "" and "ñ" have no translation
    translatedLetter =
      letter === " " || letter === "ñ" ? letter : finishingAlphabet[indexOfLetter];
    //Concatenate all letters to create the translated message 
    translatedMessage = translatedMessage + translatedLetter;
  }

  return translatedMessage;
};

var buttonClickListener = (event) => {
    //Getting the textarea fileds
    var messageToEncryptTextarea = document.getElementById("message-to-encrypt");
    var messageToDecryptTextarea = document.getElementById("message-to-decrypt");
    //Getting the values of textarea
    var messageToEncrypt = messageToEncryptTextarea.value;
    var messageToDecrypt = messageToDecryptTextarea.value;

    //Depending on button, the message will be encryted or decrypted
    if (event.target.id === "encrypt-button") {
        
        var messageEncrypted = getTranslation(messageToEncrypt, plainAlphabet, encryptedAlphabet);

        messageToDecryptTextarea.value = messageEncrypted;
    } else {
        var messageDecrypted = getTranslation(messageToDecrypt, encryptedAlphabet, plainAlphabet);

        messageToEncryptTextarea.value = messageDecrypted;
    }


}

//Adding event handler to each button
document.getElementById("encrypt-button").addEventListener('click', buttonClickListener);
document.getElementById("decrypt-button").addEventListener('click', buttonClickListener);
