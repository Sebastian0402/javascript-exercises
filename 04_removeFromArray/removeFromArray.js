const removeFromArray = function() {
    let indexArray = [];   //LET instead of const because later assignement won't be permitted otherwise. Alternetavily, use const indexArray on line 6, but it is then getting slower.                                                  
    const array = arguments[0]; 
    /* loop through array and remove item */ 
    for(let i = 1; i < arguments.length; i++){
        indexArray = array.indexOf(arguments[i]);   
        if(indexArray >= 0){
            array.splice(indexArray, 1); 
        }           
    } 
    
    /* loop through array alternatively + create new Array */ 
    /*
    array.forEach(element => {
        if(arguments.includes(element)){
            indexArray.push(item); 
        }
    }); */ 

    return array; 
};

// Do not edit below this line
module.exports = removeFromArray;
console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4));