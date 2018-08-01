function fizzbuzz(upperLimit) {
    let arrayOfPrimeIndexes = generateArrayOfPrimes(upperLimit);
    let fullString = "";
    for (let i = 1; i <= upperLimit; i++) {
        let elementString = i.toString();
        if (i % 2 === 0) {
            elementString = "<span style='font-weight:bold'>" + elementString + "</span>";
        }
        if (i % 3 === 0) {
            elementString = "<span style='color:red'>" + elementString + "</span>";
        }
        if (arrayOfPrimeIndexes[i]) {
            elementString = "<span style='border:1px solid black'>" + elementString + "</span>";   
        }
        if (i !== upperLimit) {
            elementString += ', ';
        }
        fullString += elementString;
    }

    document.write("<p>" + fullString + "</p>");
}

// Sieve of Eratosthenes
function generateArrayOfPrimes(upperLimit) {
    let isTheIndexPrime = [0]; // 0 is not prime
    for (let i = 1; i <= upperLimit; i++) {
        isTheIndexPrime.push(true);
    }
    for (let i = 2; i * i <= upperLimit; i++) {
        if (isTheIndexPrime[i]) {
            for (let j = i; i * j <= upperLimit; j++) {
                isTheIndexPrime[i * j] = false;
            }
        }
    } 
    return isTheIndexPrime;
}

fizzbuzz(1000);