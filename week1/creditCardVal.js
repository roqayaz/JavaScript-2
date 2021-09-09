const validateCreditNumber = (num) => {

    //Input must be 16 characters
    const theNumberOfCharacters = (num) => {
        if(num.length === 16){
           return true;
        } else {
           return false
        }
    };

    //All characters must be numbers
    const mustBeNumbers = (num) => {
        let isNum = /^\d+$/.test(num);
        if (isNum){ 
          return true;
        } else {
            return false;
        }  
    };

    //At least two different numbers should be represented
    const twoDifferentNum = (num) => {
        
        for (let i = 0; i < num.length; i++){
            if (num[i] !== num[0]){
                return true;
            } 
        }
        return false;              
    };

    //The last number must be even
    const lastNumBeEven = (num) => {
        if (num[15] % 2 == 0){
            return true;
            } else {
            return false;
        }
    };

    //The sum of all the numbers must be greater than 16
    const sumOfAll = (num) => {
        let sum = num.split("").reduce(function(a, b){
            return parseFloat(a) + parseFloat(b);
          });
      
          if (sum > 16){
              return true;
            } else {
              return false;
            }      
    };


   // call the function

if (theNumberOfCharacters(num) === false){
  console.log(`Invalid! The input ${num} should contains 16 characters!`);
}

 else if (mustBeNumbers(num) === false){
  console.log(`Invalid! The input ${num} should contains only numbers!`);
}

else if (!twoDifferentNum(num)){
  console.log(`Invalid! The input ${num} should contains at least 2 different types of numbers!`);
}

else if (lastNumBeEven(num) === false){
  console.log(`Invalid! The last number must be even.`);
}

else if (sumOfAll(num) === false){
  console.log(`Invalid! The input ${num} should contains the numbers that must be greater than 16!`);
}

else {
   console.log(`Success! The input ${num} is a valid credit card number!`)
}
};


validateCreditNumber('123456789123456');
validateCreditNumber('1b34567a91234567');
validateCreditNumber('1111111111111111');
validateCreditNumber('1234567891234563');
validateCreditNumber('1000002000000300');
validateCreditNumber('1234567891234568');

