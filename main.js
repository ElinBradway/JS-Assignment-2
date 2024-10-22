let username;
let password;

function isValidPassword(password, username) {

    if (password.length < 8) {
        return false;
    }
    if (password === username) {
        return false;
      }
      if (/\s/.test(password)) {
        return false;
      }
      return true;
} 

console.log(isValidPassword("validpassword", "user"));
console.log(isValidPassword("valid password", "user"));
console.log(isValidPassword("user", "user"));







//*let priceNumber;

//while (true) {
//    priceNumber = prompt('Please enter a number');
//    priceNumber = Number(priceNumber);
    
//   if (!isNaN(priceNumber)) {
//        break;
//    } else {
//        console.log('Invalid input, please enter a number');
//    }
//}

// reducedPrice = priceNumber * 0.9;

//console.log('your reduced price is ', reducedPrice); 