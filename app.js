//key
var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

var message = "b': yqg ,:agr(hue:) shrerg jq,u'qf q !hg ,:psqñrf:g rg,fuwurae: s:f r' ,yq!x mbg:z 'q 'r,yrn !hfua( t'usqfuq ,:apu(:)m z q ,:a!uahq,u:a rajuq ha pragqir ,utfqe:n br' dhr !h dhurfqg)";
var message2 = "¡lo has conseguido! puedes vacilar a tus compañeros escribiendo por el chat: '¡soy la leche, turing fliparia conmigo!' y a continuacion envia un mensaje cifrado, ¡el que tu quieras!";

var searchCharIntoString = (char, string) => {
    for (var i=0; i < string.length; i++) {
        if (string[i] === char) return i;
    }
    return -1;
}

var decrypt = (message) => {
    var indexOfLetter;
    var messageDecrypted = "";
    var decryptedLetter = "";

    for (var letter of message) {
        indexOfLetter = searchCharIntoString(letter, encryptedAlphabet);
        decryptedLetter = letter === " " || letter === "ñ" ? letter : plainAlphabet[indexOfLetter];
        messageDecrypted = messageDecrypted + decryptedLetter;
    }

    return messageDecrypted;
}

var encrypt = (message) => {
    var indexOfLetter;
    var messageDecrypted = "";
    var decryptedLetter = "";

    for (var letter of message) {
        indexOfLetter = searchCharIntoString(letter, plainAlphabet);
        decryptedLetter = letter === " " || letter === "ñ" ? letter : encryptedAlphabet[indexOfLetter];
        messageDecrypted = messageDecrypted + decryptedLetter;
    }

    return messageDecrypted;
}

var decrytedMessage = decrypt(message);
console.log(decrytedMessage);
console.log(message);
console.log(encrypt(decrytedMessage));
