var encrypted='U2FsdGVkX18Rjso5E2vlZRD4EL3dY19AED2u7mRSKot9+zGAv40xMnXD6o1my3J926CJ3iaSFYF/YLFESrIMqInEvbuHQ0Y13b9LgKEa8D7hXCjN+6GbuLlFiYQqcvMm='
function myFunction()
{
    var enteredPass = document.getElementById("myText").value;
    var decrypted = CryptoJS.AES.decrypt(encrypted, enteredPass);
    eval(decrypted.toString(CryptoJS.enc.Utf8));
    console.log(decrypted.toString(CryptoJS.enc.Utf8));
    
    /*var text = 'document.getElementById("ttl").innerHTML = "That is the correct password";';
    var aaa = CryptoJS.AES.encrypt(text, "pass");
    console.log(aaa.toString());*/
}
