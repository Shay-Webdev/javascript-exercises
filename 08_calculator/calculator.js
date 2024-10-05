const add = function(a, b) {
  return a + b ;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  const iniValue = 0;
	 const sum = arr.reduce((a, b) => a+b, iniValue);
   return sum;
};


const multiply = function(arr) {
  const multiplyNUm = arr.reduce((a,b) => a * b, 1);
  return multiplyNUm;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	let fact = 1; 
    
    if(num === 0)
        return 1;
    for (let i = 2; i <= num; i++) 
         fact *=  i; 
    return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
