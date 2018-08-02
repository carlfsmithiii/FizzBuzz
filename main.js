function fizzbuzz(upperLimit) {
    const arrayOfPrimeIndexes = generateArrayOfPrimes(upperLimit);
    const paragraph = document.createElement("p");
    document.body.appendChild(paragraph);
    for (let i = 1; i <= upperLimit; i++) {
        const numberSpan = document.createElement("span");
        paragraph.appendChild(numberSpan);
        numberSpan.textContent = i;
        if (i % 2 === 0) {
            numberSpan.classList.add("bold");
        }
        if (i % 3 === 0) {
            numberSpan.classList.add("red");
        }
        if (arrayOfPrimeIndexes[i]) {
            numberSpan.classList.add("boxed");
        }
        if (i !== upperLimit) {
            paragraph.innerHTML += ', ';
        }
    }
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