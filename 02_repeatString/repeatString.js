function repeatString(string, repititions){
    // init as "", otherwise the first repitition will add an "undefined" 
    let outputString = ""; 
    // check if string is empty 
    if(string === ""){
        return ""; 
    }
    //check if repitions is >= 0 
    if(repititions >= 0){
        for(let i = 0; i < repititions; i ++){
            outputString += string; 
        }
    }else{
        outputString = "ERROR";
    }   
    return outputString; 
};

// Do not edit below this line
module.exports = repeatString;
