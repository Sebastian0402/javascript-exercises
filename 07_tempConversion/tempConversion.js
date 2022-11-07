// multiplication of 0.1 is less accurate then division by 10 and does not reduce the number to 1 decimal. 

const ftoc = function(tempF) {
  return (Math.round(((tempF - 32) * 5/9) * 10) /10)
};

const ctof = function(tempC) {
  return(Math.round((tempC * 1.8 + 32)*10) /10)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
