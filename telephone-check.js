function telephoneCheck(str) {
    // ^ and $ = Start and finish the regEx with these to define explicitly that 
    //only when the characteristics between them are met by the argument will 
    // the function return true.

    // (1\s?)? = allows for '1 555 555 5555'. I.e. the inclusion or exclusion 
    // of the first digit being 1 followed by a space is allowed. This digit can 
    // only be a 1 for the function to return true.

    // (\d{3}|\(\d{3}\)) = allows for 3 digits OR 3 digits within parenthesis.

    // [\-\s]?\d{3}[\-\s]?\d{4} = allows for hyphens OR no hyphens and just 
    // a space between another set of three digits, followed by a set of 4 digits.

    var regEx = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/
    return regEx.test(str);
}

console.log(telephoneCheck("1(555)555-5555"));