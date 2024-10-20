let priceNumber;

while (true) {
    priceNumber = prompt('Please enter a number');
    priceNumber = Number(priceNumber);
    
    if (!isNaN(priceNumber)) {
        break;
    } else {
        console.log('Invalid input, please enter a number');
    }
}

reducedPrice = priceNumber * 0.9;

console.log('your reduced price is ', reducedPrice);