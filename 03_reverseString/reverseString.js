function reverseString(string) {
    /* split splits the string into array of characters 
       => reverse() then changes the character to be in reverse order 
       => join() Then joins the character array back to a string */ 
    let reverseString = string.split("").reverse().join(""); 
    return reverseString; 
};

// Do not edit below this line
module.exports = reverseString;
