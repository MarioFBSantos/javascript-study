function palindrome(str){
    str = str.trim().replace(" ","").split("");
    strInverted = str.reverse();

    str = str.join('');
    strInverted = strInverted.join('');
    
    return str === strInverted ? true : false;
}

palindrome("race car");